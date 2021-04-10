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
        const result = await this.collection.insertOne({"ISBN": ISBN, 
                                                        "title": title, 
                                                        "author": author, 
                                                        "description": description})//I did this because readablity -_-;
        return {"ISBN": ISBN, "title": title, "author": author, "description": description};
      } 
      else {
        return null;
      }
    }

  async readOne(ISBN){
    //dont forget await
    if (this.collection !=null){
      const result = await this.collection.findOne({
        "ISBN":ISBN
      });
      return {result};
    }
    else{
      return {book: "not Found"}
    }

  }

  async readMany(){
    //dont forget await
    if (this.collection !=null) await this.collection.readMany({
      //Idk what to put here
    });
    else{
      return {book: "not Found"}
    }//??
    
  }

  //Change code for BOOK REVIEWS
  //?? Should ISBN be included down below ??
  async updateOne(ISBN, title, author, description){
    if(this.collection !=null){
  //                                                   I dont know if it should be id or ISBN
      const result = await this.collection.updateOne({"ISBN":ISBN}, {$set: {"title": title}, "author": author, "description": description});  
      return{"title": title, "author": author, "descirption": description};
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

  //Do we need to put something inside of the close() on line 66 and 68, UPDATE I DONT THINK SO
  //NOTE I moved close form line 17 to here
  close(){
    if(this.connection !=null) {
      this.connection.close();
    }
  }
}

export default Database;


/*TO-DO List in index.js: close() - I THINK IT IS DONE
                          readOne()
                          readMany()
*/