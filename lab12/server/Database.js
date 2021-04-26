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

  async createOne(ISBN, title, author, description){
    //dont forget await
      if (this.collection != null) {
        const results = await this.collection.insertOne({"ISBN": ISBN, 
                                                        "title": title, 
                                                        "author": author, 
                                                        "description": description});//I did this because readablity -_-;
        return {"ISBN": ISBN, "title": title, "author": author, "description": description};
      } 
      else {
        return null;
      }
    }

  async readOne(ISBN){
    //dont forget await
    if (this.collection !=null){
      const result = await this.collection.findOne({"ISBN":ISBN}); //is it findOne or find
      if(result == null) {
        result = {book: "not found"};
        }
        return result;//latest attempt to get "book: 'not found'" to appear instead of null
    } 
  }

  async deleteOne(ISBN){
    if(this.collection !=null){
      const result = await this.collection.deleteOne({"ISBN": ISBN});
      return {"deleted books": result.deletedCount};
    }
    else {
      return {"deleted books": 0};
    }
  }

  close(){
    if(this.connection !=null) {
      this.connection.close();
    }
  };
}

export default Database;
