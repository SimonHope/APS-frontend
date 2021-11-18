pipeline {
    agent any

    stages {
        stage('Git Clone') {
            steps {
                cleanWs()
                git branch: 'main',url: 'https://github.com/SimonHope/APS-frontend.git'
            }
        }
        
        
        stage('Build Production') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Deploy on web server') {
            steps {
                sh 'sudo cp -R dist/. /var/www/html/'
            }
        }
        
    }
}
