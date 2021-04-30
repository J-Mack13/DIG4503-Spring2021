import MongoClient from 'mongodb';

const URL = "mongodb+srv://JuliaMurphy:KAJS04R3VmTPtaw3@cluster0.yuzwq.mongodb.net"

class Database{
  constructor(){
    this.collection = null;
    this.connection = null;
    this.database = null;
  }

  async connect(database, collection){
    this.connection = await MongoClient.connect(URL);
    this.database = this.connection.db(database);
    this.collection = this.database.collection(collection);
  }

//PUT  
  async createOne(number, title, licensors, source){
    //dont forget await
      if (this.collection != null) {
        const results = await this.collection.insertOne({"number": number, 
                                                        "title": title, 
                                                        "licensors": licensors, 
                                                        "source": source});
        return {"number": number, "title": title, "licensors": licensors, "source": source};
      } 
      else {
        return null;
      }
    }

//GET    
  async readOne(number){
    if (this.collection !=null){
      const result = await this.collection.findOne({"number":number}); //is it findOne or find
      if(result == null) {
        result = {book: "not found"};
        }
        return result;//latest attempt to get "book: 'not found'" to appear instead of null
    } 
  }

//PATCH  
  async updateOne(number, title, licensors, source){ 
    if(this.collection !=null){
      const results = await this.collection.updateOne({"licensors":licensors}, //OR "number":number
      {$set: {"title": title}, "source": source});  
      //return{"title": title, "licensors": licensors, "descirption": source};
      return results;
    }
    else {
      //return{"title": title, "licensors": licensors, "descirption": source};
      return null;
    }
  }

//DELETE
  async deleteOne(number){
    if(this.collection !=null){
      const result = await this.collection.deleteOne({"number": number});
      return {"deleted anime": result.deletedCount};
    }
    else {
      return {"deleted anime": 0};
    }
  }

  close(){
    if(this.connection !=null) {
      this.connection.close();
    }
  };
}

export default Database;