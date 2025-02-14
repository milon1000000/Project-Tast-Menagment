import nodemailer from "nodemailer";
import { EMAIL_HOST,EMAIL_PORT,EMAIL_PASSWORD,EMAIL_USER,MAIL_ENCRYPTION} from "../config/config.js";



 const EmailSend=async(EmailTo,EmailText,EmailSubject,EmailHTMLBody)=>{
    const transporter=nodemailer.createTransport({
        host:EMAIL_HOST,
        service:"Gmail",
        port:EMAIL_PORT,
        secure:true,
        auth:{
            user:EMAIL_USER,
            pass:EMAIL_PASSWORD,
        },
        // tls:{
        //     tlsSend:false,
        // }
    })

    const mailOptions={
        from:EMAIL_USER,
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText,
        html:EmailHTMLBody,
    
    }

    try{
        await transporter.sendMail(mailOptions);
        return true;
    }catch(err){
        return false;
    }
 }

 
 export default EmailSend;





