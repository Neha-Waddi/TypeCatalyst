import {connectMongodb} from "../../../lib/mongodb"
import Users from "../../../models/user"
import bcrypt from "bcryptjs"

export async function POST(req) {

  await connectMongodb();
  const{username,email,password,confirmPassword}=await req.json();
  const existingUser=await Users.findOne({username});

  if(existingUser){
    return new Response(JSON.stringify({error:"username already exists"}),{status:400,
      headers:{
        "Content-Type":"application/json",
      },
    });
  }
  const hashedPassword=await bcrypt.hash(password,10);

  const newuser=new Users({
    username,
    email,
    password:hashedPassword,
  });

  const saveduser =await newuser.save();

  return new Response(JSON.stringify({message:'User created successfully',user:saveduser}),
  {
    status:201,
    headers:{
        'Content-Type':'application/json',
    },
   });
}
