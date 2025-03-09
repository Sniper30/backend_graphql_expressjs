import mongoose from "mongoose";
import { userLogin } from "../schemas/user.schema.js";
import { IUser } from "../../../interfaces/user.interface.js";
import {genSalt, hash} from "bcrypt";
export const User = mongoose.model('user',userLogin);
const user = new User();


export const seriviceUsers = {

    saveUsers:async(_user:IUser)=>{
        const {password, ...rest} = _user;
        const _hash = await hash(password, await genSalt(10));
        user.email =rest.email;
        user.password = _hash;
        user.phone = rest.phone;
        user.name = rest.name;
        return await user.save();
    },
    findUser: ()=> user.collection.find({}) 
}

