pipeline {
  agent any

  options {
    // Avoid the first implicit SCM checkout; we do our own below
    skipDefaultCheckout(true)
  }

  environment {
    CI = 'true'
    NVM_DIR = "${env.HOME}/.nvm"
    NODE20_PREFIX = "export NVM_DIR='${NVM_DIR}'; \
[ -s '${NVM_DIR}/nvm.sh' ] || (curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash); \
. '${NVM_DIR}/nvm.sh'; nvm install 20; nvm use 20;"
  }

  stages {
    stage('Checkout') {
      steps {
        // Use the repo you actually want to build
        git branch: 'main', url: 'https://github.com/karthikvelou-cts/energy-distribution-management.git'
      }
    }

    stage('Show package info') {
      steps {
        sh """
          bash -lc "${NODE20_PREFIX} node -v && npm -v"
          [ -f package.json ] || { echo 'package.json not found!'; exit 1; }
          echo 'package.json:' && cat package.json
          echo 'Available npm scripts:' && npm run || true
        """
      }
    }

    stage('Install Dependencies') {
      steps {
        sh """
          bash -lc "${NODE20_PREFIX} \
          if [ -f package-lock.json ]; then npm ci || npm install; else npm install; fi"
        """
      }
    }

    stage('Build') {
      steps {
        sh """
          bash -lc "${NODE20_PREFIX} \
          if npm run | grep -q '^  build\\b'; then \
            echo 'Running build...'; npm run build; \
          else \
            echo 'No build script found, skipping build'; \
          fi"
        """
      }
      post {
        always {
          archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
        }
      }
    }

    stage('Test with Coverage') {
      steps {
        sh """
          bash -lc "${NODE20_PREFIX} \
          if npm run | grep -q '^  test:coverage\\b'; then \
            echo 'Running test:coverage...'; npm run test:coverage; \
          elif npm run | grep -q '^  test\\b'; then \
            echo 'Running test with coverage flags...'; npm test -- --coverage --watchAll=false; \
          else \
            echo 'No test scripts found, skipping tests'; \
          fi"
        """
      }
      post {
        always {
          archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
          script {
            if (fileExists('coverage/coverage-summary.json')) {
              def pct = sh(script: "node -e \"console.log(require('./coverage/coverage-summary.json').total.lines.pct)\"", returnStdout: true).trim()
              echo "Lines coverage (total): ${pct}%"
            } else {
              echo "coverage/coverage-summary.json not found (tests may have been skipped)."
            }
          }
        }
      }
    }

    stage('Verify LCOV Presence') {
      steps {
        sh """
          bash -lc "if [ ! -f coverage/lcov.info ]; then \
            echo 'ERROR: coverage/lcov.info not found. Ensure tests ran and produced coverage.'; \
            ls -la coverage || true; \
            exit 1; \
          else \
            echo 'Found coverage/lcov.info'; \
            wc -l coverage/lcov.info; \
          fi"
        """
      }
    }

    stage('SonarQube Analysis') {
      steps {
        script {
          withSonarQubeEnv('MySonarQubeServer') {
            def scannerHome = tool 'SonarScanner'
            withCredentials([string(credentialsId: 'SONARQUBE_TOKEN', variable: 'SQ_TOKEN')]) {
              sh """
                bash -lc "${NODE20_PREFIX} \
                \\"${scannerHome}/bin/sonar-scanner\\" \
                  -Dsonar.projectKey=energy-distribution-management \
                  -Dsonar.sources=src \
                  -Dsonar.tests=src \
                  -Dsonar.test.inclusions=**/*.test.js,**/*.test.jsx,**/*.test.ts,**/*.test.tsx \
                  -Dsonar.coverage.exclusions=**/*.test.js,**/*.test.jsx,**/*.test.ts,**/*.test.tsx,jest.config.js,babel.config.js,vitest.config.* \
                  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                  -Dsonar.host.url=\\"${env.SONAR_HOST_URL}\\" \
                  -Dsonar.login=\\"${SQ_TOKEN}\\""
              """
            }
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying application...'
      }
    }
  }

  post {
    success { echo 'Pipeline completed successfully!' }
    failure { echo 'Pipeline failed. Please check logs.' }
    always  { archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true }
  }
}
