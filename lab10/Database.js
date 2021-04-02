import MongoClient from 'mongodb';

const url = "mongodb+srv://JuliaMurphy:KAJS04R3VmTPtaw3@cluster0.yuzwq.mongodb.net";

//IDK WHERE TO PUT THIS!!!!!
// Make sure to change the stuff(mongoClient) below!!!!!!
MongoClient.connect(URL, { useUnifiedTopology: true})//CONNECT() IS LOCATED HERE
.then(connection => {
  let database = connection.db("lab10");
  let collection = database.collection("people");

  let cursor = collection.find({"people": firstName, lastName, favoriteColor}); //<-Since we are searching for those three elements this is what i did based off of lab9

    cursor.forEach(document => {
        console.log(document);
    }, () => {
      //remember to close the connection
        connection.close();//CLOSE() IS LOCATED HERE, HOW DO I CONNECT THE TWO THINGS!?!
    });
})
.catch(error => {
    console.log("An Error Has Occured" + error);
});

class Database {
  constructor() {
      this.arrayExample = [
          'Cortney',
          'Dewayne',
          'Trenton',
          'Pamala',
          'Ettie',
          'Errol',
          'Lorrie',
          'Hang',
          'Lauryn',
          'Caterina',
          'Isa',
          'Marcela'
      ];
  }

  createOne(person) {
      // Add to the internal array.
      this.arrayExample.push(person);
      // Return the name just created.
      return {person: person};
  }

  readOne(person) {
      // Setup a default response.
      let result = {person: "not found"};

      // Search through the internal array.
      this.arrayExample.forEach(value => {
          if(value == person) {
              result = {person: person};
          }
      });

      // Return the default or searched-for result.
      return result;
  }
}
export default Database;