import { connect } from "mongoose";
class MongoDbWithMongoose {
    static _instance;
    static b = false;
    static num = 0;
    constructor() {
        if (MongoDbWithMongoose._instance instanceof MongoDbWithMongoose)
            return MongoDbWithMongoose._instance;
        MongoDbWithMongoose._instance = this;
        this.connectMongoose();
    }
    async connectMongoose() {
        MongoDbWithMongoose.num++;
        await connect("mongodb+srv://jprafael348:yMOBE2e0PN5kOIWg@gropho-cluster.srx3w.mongodb.net/")
            .then(() => console.log('mongodb connected'))
            .catch(error => console.log('mongodb error: ', error));
    }
}
;
export const mongodb = () => new MongoDbWithMongoose();
//# sourceMappingURL=connection.js.map