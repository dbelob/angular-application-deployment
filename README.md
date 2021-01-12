# Application deployment test
Application for deployment testing.

<a href="https://github.com/dbelob/application-deployment/actions"><img alt="GitHub Actions status" src="https://github.com/dbelob/application-deployment/workflows/Build/badge.svg"></a>
[![codecov](https://codecov.io/gh/dbelob/application-deployment/branch/master/graph/badge.svg)](https://codecov.io/gh/dbelob/application-deployment)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dbelob_application-deployment&metric=alert_status)](https://sonarcloud.io/dashboard?id=dbelob_application-deployment)

## Requirements

* [JDK 11+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Apache Maven 3.6.0+](https://maven.apache.org/download.cgi)
* [Node.js 12.16.1](https://nodejs.org) (optional)

## Running

### Method 1

1. From the command line with *Maven* (in the root directory):

    `mvn clean install -Dmaven.test.skip=true`

1. Change directory:

    `cd application-deployment-server`

1. From the command line with *Maven*:

    `mvn spring-boot:run`

1. Access the deployed web application at:

    http://localhost:8080

### Method 2

1. Install *Node.js*

1. Run to ensure that *npm* is working:

    `npm -v`

1. Change directory:

    `cd application-deployment-server`

1. From the command line with *Maven*:

    `mvn spring-boot:run`

1. Change directory:

    `cd application-deployment-web`

1. From the command line with *npm*:

    `npm start`

1. Access the deployed web application at:

    http://localhost:4200

### Method 3

1. From the command line with *Maven* (in the root directory):

    `mvn clean package -DskipTests`

1. Change directory:

    `cd application-deployment-distrib/target`

1. Find distribution file:

    `application-deployment-<version>.zip`

1. Extract files from ZIP, for example:

    `unzip application-deployment-<version>.zip`

1. Change directory:

    `cd application-deployment-<version>`

1. Run:

    `runme.bat` (*Windows*)  
    `runme.sh` (*macOS* or *Linux*)

1. Access the running web application at:

    http://localhost:8080
