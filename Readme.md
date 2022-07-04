## ABOUT
A Node.js REST API built with express.js. Receives one starting and one ending date parameter (from, to) and filters the data of orders/items given in the format of an [array of objects](./data/mockData.json) by the given date parameters. 

## HOW-TO RUN
### With Docker
#### 1- Build Docker Container
command: `docker build . -t kuehne_nagel_express`

#### 2- Run Docker Container
command: `docker run -i -t kuehne_nagel_express`

### With Yarn
commands (run in order):
*  `yarn install`
*  `yarn run dev`

### With NPM
commands (run in order):
* `npm install`
* `npm run dev`

## DOCUMENTATION
### Swagger
To see a simple REST API documentation created with Swagger, locate to: http://{BASE URL}/api-docs

Replace BASE_URL with the URL including the port on which you are running the applications.

CHEERS! :joy: