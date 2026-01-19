pipeline {
    agent any

    environment {
        // Tên image và container
        DOCKER_IMAGE = 'frontend-angular-app'
        DOCKER_TAG = 'latest'
        CONTAINER_NAME = 'frontend-app'
        // Cổng muốn chạy trên server
        HOST_PORT = '80' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Jenkins tự động checkout code từ git nếu cấu hình SCM
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo '--- Building Docker Image ---'
                    // Build image từ Dockerfile hiện tại
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                    echo '--- Deploying Container ---'
                    // Dừng và xóa container cũ nếu tồn tại
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    """
                    
                    // Chạy container mới
                    // -d: chạy ngầm
                    // -p: map port 80 của host vào port 80 của container
                    // --restart unless-stopped: tự khởi động lại nếu crash
                    sh """
                        docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${HOST_PORT}:80 \
                        --restart unless-stopped \
                        ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }
    }
}