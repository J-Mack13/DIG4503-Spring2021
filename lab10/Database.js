import MongoClient from 'mongodb';

const url = "mongodb+srv://JuliaMurphy:KAJS04R3VmTPtaw3@cluster0.yuzwq.mongodb.net";

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});
        this.database =this.connection.db("lab10");
        this.collection =this.database.collection("people");
    }

    async createOne(firstName, lastName, favoriteColor) {
        let obeject = {
            "firstName": firstName,
            "lastName": lastName,
            "favoriteColor": favoriteColor
        };
        if(this.collection !=null) {
            return await this.collection.insertOne(obeject);
        }
    }

    async readOne(query) {
        let results = await this.collection.findOne({firstName: query});
        if (results !=null) {
            return results;
        }
        else{
            return{ person: "not found" };
        }
    }

    //NOTE TO SLEF: dont forget to close!!
    close() {
        if(this.collection !=null) {
            this.connection.close();
        }
    }
}

export default Database;