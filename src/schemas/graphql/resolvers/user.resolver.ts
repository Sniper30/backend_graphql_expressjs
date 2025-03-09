import { IUser } from "../../../interfaces/user.interface.js";
import { seriviceUsers } from "../../mongo/models/user.model.js";


export const resolvers = {
    Query:{
        getUsers:()=> seriviceUsers.findUsers(),
        login:async(root:any, user: IUser) => await seriviceUsers.login(user.email,user.password)
    },
    Mutation:{
        addUser: async (root: any, user: IUser)=> await seriviceUsers.saveUser(user)
    }
}