pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }

        stage('Manual Approval') {
            steps {
                script {
                    def userInput = input(
                        id: 'manualApproval',
                        message: 'Lanjutkan ke tahap Deploy?',
                        parameters: [
                            choice(choices: ['Proceed', 'Abort'], description: 'Pilih opsi', name: 'approvalChoice')
                        ]
                    )
                    if (userInput.approvalChoice == 'Abort') {
                        sh './jenkins/scripts/kill.sh'
                    }
                }
            }
        }

        stage('Deploy') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                script { 
                    sleep(time: 60, unit: 'SECONDS') 
                }
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}