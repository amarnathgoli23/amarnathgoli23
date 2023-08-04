import mongoose from "mongoose";
import { DB_URL } from "./env";
import User from "./models/User";
import bcrypt from "bcrypt";

async function seed() {
 await mongoose.connect(DB_URL);

 bcrypt.hash("testtest", 12).then((hashedPassword) => {
  const user = new User({
   name: "testtest",
   username: "testtest",
   password: hashedPassword,
   email: "testtest@gmail.com",
  });
  return user.save();
 });

 console.info("Done!");
}

seed();
