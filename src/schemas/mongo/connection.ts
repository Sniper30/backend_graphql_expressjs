import {connect} from "mongoose";
import { envs } from "../../config/envs.js";


class MongoDbWithMongoose{
    public static _instance: MongoDbWithMongoose;
    public static b: boolean = false;
    public static num: number = 0;
    constructor(){  
        if(MongoDbWithMongoose._instance instanceof MongoDbWithMongoose) return MongoDbWithMongoose._instance;
        MongoDbWithMongoose._instance = this;
        this.connectMongoose();
    }
    
    async connectMongoose(){
        MongoDbWithMongoose.num++
       await connect(envs.database_url)
        .then(()=> console.log('mongodb connected'))
        .catch(error => console.log('mongodb error: ', error))
    }
};

export const mongodb  = ()=> new MongoDbWithMongoose();
