const express = require("express")
const cors = require('cors');
const bodyparser = require('body-parser')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');

const userRouter = require('./routes/user.route');
const informationRouter = require('./routes/information.route')
const options = require('./config/swagger.config')

dotenv.config();

const PORT_SERVER = parseInt(process.env.PORT, 10) || 3000;

const specs = swaggerJsDoc(options);

const app = express();


app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.enable(cors())

const router = express.Router();

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
)

app.use('/user', userRouter);
app.use('/information', informationRouter);


app.listen(PORT_SERVER, () => console.log(`Server is listennig on port ${ PORT_SERVER }`));
