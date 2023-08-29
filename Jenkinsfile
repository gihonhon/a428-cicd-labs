// pipeline {
//     agent {
//         docker {
//             image 'node:16-buster-slim' 
//             args '-p 3000:3000' 
//         }
//     }
//     stages {
//         stage('Build') { 
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh './jenkins/scripts/test.sh'
//             }
//         }
//     }
// }

node {
    def dockerOptions = [
        docker.image('node:16-buster-slim').withRun('-p 3000:3000')
    ]

    try {
        def dockerContainer = docker.run(dockerOptions)
        stage('Build') {
            docker.inside("${dockerContainer.id}") {
                sh 'npm install'
            }
        }
    } finally {
        dockerContainer.stop()
        dockerContainer.remove(force: true)
    }
}

// Pemicu polling SCM untuk memeriksa perubahan setiap 2 menit
properties([
    pipelineTriggers([
        [$class: 'SCMTrigger', cron: 'H/2 * * * *']
    ])
])
