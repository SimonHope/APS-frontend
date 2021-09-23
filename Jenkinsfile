pipeline {
    agent any

    stages {
        stage('Git Clone') {
            steps {
                cleanWs()
                git branch: 'master',url: 'https://github.com/SimonHope/Project_KMITL.git'
            }
        }
        
                stage('docker Clear all container') {
            steps {
                sh 'docker stop nginx || true && docker rm nginx || true'
                sh 'docker stop myadmin || true && docker rm myadmin || true'
                sh 'docker stop dolphin || true && docker rm dolphin || true'
            }
        }
        
        stage('docker compose run') {
            steps {
                sh 'cp ../.env .env'
                sh 'docker-compose up -d'
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
                sh 'sudo cp -a dist/. web/'
            }
        }
        
    }
}