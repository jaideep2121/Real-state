"use server"

import db from "../db/db"


import conatct from "../models/moodel2"

export const datastore2=async(fromdata)=>{
    try{
        // const{firstname,email,phoneno,message}=req.body;
       await db();

        // const res=User.create({
        //     firstname:firstname,
        //     email:email,
        //     phoneno:phoneno,
        //     message:message,
        // });
      const res=await conatct.create(fromdata);

     

    }catch(error){
     
      console.log(error);
    }
}