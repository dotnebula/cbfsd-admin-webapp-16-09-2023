pipeline { 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Source checkout') {
            steps {
                echo 'Cloning source code is finished.'
            }
        }

        stage('Test') {
            steps {
                echo 'Cloning source test is finished.'
            }
        }

        stage('Docker build') {
            steps {
                echo 'Build dokcer image'
                sh ''' docker image build -t cbfsd-admin-webapp .'''
            }
        }

        stage('Docker deploy') {
            steps {
                echo '----------------- This is a docker deploment phase ----------'
                sh '''
                (if  [ $(docker ps -a | grep cbfsd-admin-webapp-container | cut -d " " -f1) ]; then \
                        echo $(docker rm -f cbfsd-admin-webapp-container); \
                        echo "---------------- successfully removed cbfsd-admin-webapp-container ----------------"
                     else \
                    echo OK; \
                 fi;);
                docker container run --network ecom-webapp-network --restart always --name cbfsd-admin-webapp-container -p 4200:80 -d cbfsd-admin-webapp
            '''
            }
        }
    }
}