import MongoClient from 'mongodb';

const URL = "mongodb+srv://JuliaMurphy:KAJS04R3VmTPtaw3@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
  let database = connection.db("sample_airbnb");
  let collection = database.collection("listingsAndReviews");

  let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});

    cursor.forEach(document => {
        console.log(document);
    }, () => {
      //remember to close the connection
        connection.close();
    });
})
.catch(error => {
    console.log("An Error Has Occured" + error);
});