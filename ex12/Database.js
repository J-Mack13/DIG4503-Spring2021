import MongoClient from 'mongodb';

const url = "<mongodb+srv://JuliaMurphy:KAJS04R3VmTPtaw3@cluster0.yuzwq.mongodb.net>";

export default Database;

export default class Database {
  constructor() {
          // Setup a default value for connection
          this.connection = null;
          // Setup a default value for database
          this.database = null;
          // Setup a default value for collection
          this.collection = null;
      }

      async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("<Database>");
        // Select a collection.
        this.collection = this.database.collection("<Collection>");
      }

  async createOne(person) {
      // Test if collection is null or not.
      // If it is not null, it was overwritten internally and can be used.
      if(this.collection != null) {
          // Wait for the insertOne() method to finish.
          return await this.collection.insertOne(person);
      }
  
  }

  readOne(person) {
   
  }

  deleteMany(person) {
 
  }

  close() {
    if(this.collection != null) {
      this.connection.close();
    }
  }
}
