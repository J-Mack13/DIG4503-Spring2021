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
      const results = await this.collection.findOne({"ISBN":ISBN}); //is it findOne or find
      return results; //OR {"ISBN": ISBN}; OR {results}
    }
    else{
      return {book: "not Found"}
    }
  }

  async readMany(title, author){
    if (this.collection !=null){
      const results = await this.collection.findMany({ //is find or findMany
      "title": title,
      "author": author,
      });
      return results;//{book: results};//{"title": title, "author": author};
    }
    else{
      return {books: "not Found"}
    }
  }

  //?? Should ISBN be included down below ??
  async updateOne(ISBN, title, author, description){ 
    if(this.collection !=null){
      const results = await this.collection.updateOne({"author":author}, //OR "ISBN":ISBN
      {$set: {"title": title}, "description": description});  
      //return{"title": title, "author": author, "descirption": description};
      return results;
    }
    else {
      //return{"title": title, "author": author, "descirption": description};
      return null;
    }
  }

  async deleteOne(ISBN){
    if(this.collection !=null){
      const result = await this.collection.deleteOne({"ISBN": ISBN});
      return {"deleted": result.deletedCount};
    }
    else {
      return {"deleted": 0};
    }
  }

  close(){
    if(this.connection !=null) {
      this.connection.close();
    }
  };
}

export default Database;


/*TO-DO Database.js:  close() - I THINK IT IS DONE
                      readOne() - IT IS DONE
                      deleteOne() - IT IS DONE
                      readOne() - IT IS DONE
                      readMany() -
                      updateOne() -
*/