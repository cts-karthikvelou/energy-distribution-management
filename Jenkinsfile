pipeline {
  agent any

  environment {
    CI = 'true'
    NVM_DIR = "${env.HOME}/.nvm"
    // Bootstrap nvm + Node 20 and run a command. Reused in every shell step.
    NODE20_PREFIX = "export NVM_DIR='${NVM_DIR}'; \
[ -s '${NVM_DIR}/nvm.sh' ] || (curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash); \
. '${NVM_DIR}/nvm.sh'; nvm install 20; nvm use 20;"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/cts-karthikvelou/energy-distribution-management/'
      }
    }

    stage('Show package info') {
      steps {
        sh """
          bash -lc "${NODE20_PREFIX} node -v && npm -v"
          if [ ! -f package.json ]; then echo 'package.json not found!'; exit 1; fi
          echo 'package.json:' && cat package.json
          echo 'Available npm scripts:' && npm run || true
        """
      }
    }

    stage('Install Dependencies') {
      steps {
        // npm ci (strict) -> fallback to npm install if lockfile drift exists
        sh """
          bash -lc "${NODE20_PREFIX} \
          if [ -f package-lock.json ]; then npm ci || npm install; else npm install; fi"
        """
      }
    }

    stage('Build') {
      steps {
        // Run build only if a "build" script exists
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
        // Prefer test:coverage, else test; skip gracefully if neither exists
        sh """
          bash -lc "${NODE20_PREFIX} \
          if npm run | grep -q '^  test:coverage\\b'; then \
            echo 'Running test:coverage...'; npm run test:coverage; \
          elif npm run | grep -q '^  test\\b'; then \
            echo 'Running test...'; npm test; \
          else \
            echo 'No test scripts found, skipping tests'; \
          fi"
        """
      }
      post {
        always {
          archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
          // If you generate JUnit XML (e.g., jest-junit), you can publish it:
          // junit testResults: 'junit-report.xml', allowEmptyResults: true
        }
      }
    }

    stage('SonarQube Analysis') {
      steps {
        script {
          // Uses Jenkins' configured SonarQube server + SonarScanner tool
          withSonarQubeEnv('MySonarQubeServer') {
            def scannerHome = tool 'SonarScanner'
            withCredentials([string(credentialsId: 'SONARQUBE_TOKEN', variable: 'SQ_TOKEN')]) {
              sh """
                bash -lc "${NODE20_PREFIX} \
                \\"${scannerHome}/bin/sonar-scanner\\" \
                  -Dsonar.projectKey=energy-distribution-management \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=\\"${env.SONAR_HOST_URL}\\" \
                  -Dsonar.login=\\"${SQ_TOKEN}\\" \
                  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info"
              """
            }
          }
        }
      }
    }

    stage('Deploy') {
      when { branch 'main' }
      steps {
        echo 'Deploying build artifacts...'
        // Example:
        // sh 'aws s3 sync dist/ s3://my-energy-frontend-bucket --delete'
      }
    }
  }

  post {
    success { echo 'Pipeline completed successfully!' }
    failure { echo 'Pipeline failed. Please check logs.' }
    always  { archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true }
  }
}
