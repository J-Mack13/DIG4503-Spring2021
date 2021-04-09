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
  close(){

  }
  async createOne(){
    //dont forget await

  }
  async readOne(){
    //dont forget await

  }
  async readMany(){
    //dont forget await
    
  }
  //Change code for BOOK REVIEWS
  //?? Should ISBN be included down below ??
  async updateOne(ISBN, title, author, description){
    if(this.collection !=null){
  //                                                   I dont know if it should be id or ISBN
      const result = await this.collection.updateOne({"ISBN":ISBN}, {$set: {"title": title}, "author": author, "description": description});  
    }
    else {
      return null;
    }
  }
  //I dont know if it should be id or ISBN
  async deleteOne(ISBN){
    if(this.collection !=null){
      const result = await this.collection.deleteOne({"ISBN": ISBN});
      return {"deleted": result.deletedCount};
    }
    else {
      return {"deleted": 0};
    }
  }
}
export default Database;