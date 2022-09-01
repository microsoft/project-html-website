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
          sudo yum install nginx -y
          sudo service nginx start
        }
      }
    }
  }
}
