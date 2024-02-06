
import nodemailer from "nodemailer";

    const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
           //GmailApp =>   app firstApp
        user: process.env.SENDEMAIL,
        pass: process.env.SENDPASSWORD,  
    },
    });   


    const SendEmail=async(email,url)=> {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Fred Foo 👻" <heshamshaban0098@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
        html: `<h1>Please Verify Your email <a href='${url}'> verify </a> </h1>`,// html body  
        }); 
    
        console.log("Message sent: %s", info.messageId);         
    } 


    export default SendEmail;