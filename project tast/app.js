import mongoose from "mongoose";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./router/api.js";
import rateLimit from "express-rate-limit";
import { MONGODB_CONNECTION,PORT,WEB_CACHE,URL_ENCODED,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER,MAX_JSON_SIZE } from "./app/config/config.js";
import express from "express";

import fileUpload from "express-fileupload";

const app=express();

app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODED}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

app.use(fileUpload({
    limits:{fileSize:50*1024*1024},
}))


const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter)


app.set('etag',WEB_CACHE)



let OPTION={user:'',pass:''}

mongoose.connect("mongodb://127.0.0.1:27017/DataList").then((res)=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log(err)
})






app.use('/api',router);

app.use(express.static('storage'))

app.listen(PORT,()=>{
    console.log(`App is running port ${PORT}`)
})