import mongoose from "mongoose";
import { userLogin } from "../schemas/user.schema.js";
import { IUser } from "../../../interfaces/user.interface.js";
import {genSalt, hash,compare} from "bcrypt";
import ExeptionHandler from "../../../config/exeptions.js";
export const User = mongoose.model('user',userLogin);


export const seriviceUsers = {
    
    saveUser:async(_user:IUser)=>{
        const user = new User();
        const {password, ...rest} = _user;
        const _hash = await hash(password, await genSalt(10));
        user.email =rest.email;
        user.password = _hash;
        user.phone = rest.phone;
        user.name = rest.name;
        return await user.save();
    },
    
    findUsers: async ()=> await User.find(),

    login: async (email: string, password: string)=>{
        try {
            const _user:IUser = await User.findOne({email}).exec() as IUser;
            if (!_user) throw new ExeptionHandler("invalid email").badRequest()

            const validatePassword = await compare(password,_user.password);
            if(!validatePassword) throw new ExeptionHandler("Wrong password").unauthorized();
            return  _user 

        } catch (error) {
            console.log(error)
        }
        
    }
}

