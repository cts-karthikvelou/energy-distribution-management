pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/karthikvelou-cts/energy-distribution-management.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Example: sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Example: sh 'mvn test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Use the SonarQube server configured in Jenkins
                    withSonarQubeEnv('MySonarQubeServer') {

                        // Load the SonarScanner tool installed in Jenkins
                        def scannerHome = tool 'SonarScanner'

                        // Use your SonarQube token securely
                        withCredentials([string(credentialsId: 'SONARQUBE_TOKEN', variable: 'SQ_TOKEN')]) {
                            sh """
                                ${scannerHome}/bin/sonar-scanner \
                                -Dsonar.projectKey=energy-distribution-management \
                                -Dsonar.sources=. \
                                -Dsonar.host.url=https://dev.flowsource.next25era.org:447 \
                                -Dsonar.login=${SQ_TOKEN}
                            """
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Example: sh './deploy.sh'
            }
        }
    }
}
