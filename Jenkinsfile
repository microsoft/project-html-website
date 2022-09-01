#!groovy
pipeline {
  agent any
  stages
  {
    stage("install_nginx")
    {
      steps
      {
        script
        {
          sh 'sudo yum install nginx -y && sudo service nginx start'
        }
      }
    }
  }
}
