import express from 'express';
import {MONGODB_USERNAME,MONGODB_PASSWORD } from "./config/index.js";
import cors  from "cors";
import mongoose from 'mongoose';

let app_port = process.env || 5001;
//middleware
import {errorHandler} from "./middlewares/index.js";

//routes
import { router } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.atxnj0o.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true , useFindAndModify : true , useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected successfully!');
}); 







app.use(errorHandler);
app.listen(app_port, () => {
    console.log(`Currently listening on Port ${APP_PORT} `);

})
