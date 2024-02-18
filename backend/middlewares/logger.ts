import type {RequestHandler} from "express";

const logger : RequestHandler = (req,res,next) =>{
    console.log("========================")
    console.log("Request IP : ", req.ip);
    const formatedDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log("Request Time : ",  formatedDate);
    console.log("Request Method : ", req.method);
    console.log("Request URL : ", req.url);
    if(req.method === 'POST'){
        console.log("Request Body : ", req.body);
    }
    console.log("========================")
    next();
}

export default logger;
