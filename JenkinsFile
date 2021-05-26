pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
              sh 'docker build -t astr1k/myproj .'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'docker push astr1k/myproj' 
            }
        }       
    }
}
