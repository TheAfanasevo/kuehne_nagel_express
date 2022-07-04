## ABOUT
A Node.js REST API built with express.js. Receives one starting and one ending date parameter (from, to) and filters the data of orders/products given in the format of an [array of objects](./data.mockData.json) by the given date parameters. 

## HOW-TO RUN
### With Docker
#### 1- Build Docker Container
command: `docker build . -t kuehne_nagel_express`

#### 2- Run Docker Container
command: `docker run -i -t kuehne_nagel_express`

### With Yarn
commands (run in order):
<ol>
    <li>`yarn install`</li>
    <li>`yarn run dev`</li>
</ol>

### With NPM
commands (run in order):
<ol>
    <li>`npm install`</li>
    <li>`npm run dev`</li>
</ol>

## DOCUMENTATION
### Swagger
To see a simple REST API documentation created with Swagger, locate to: http://{BASE URL}/api-docs

Replace BASE_URL with the URL including the port on which you are running the applications.

CHEERS!