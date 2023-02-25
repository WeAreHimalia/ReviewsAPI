// const mongoose = require("mongoose");

// // Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/reviewdb";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// // Define a schema
// const Schema = mongoose.Schema;

// const meta_aggregated = new Schema({
//   product_id: Number,
//   reviews_old: String,
//   reviews:[{
//     review_id: Number,
//     rating: Number,
//     summary: String,
//     recommend: Boolean,
//     reported: Boolean,
//     response: String,
//     body: String,
//     date: Date,
//     reviewer_name: String,
//     reviewer_email: String,
//     helpfulness: Number,
//     photos: [{
//       id: Number,
//       url: String
//     }]
//   }]
// });

// const arrayOfReviews = mongoose.model("arrayOfReviews", meta_aggregated);

// const stringToArrayOfObjects = (string) => {
//   try {
//     return JSON.parse(string.replace(/'/g, '"').replace(/True/g, "true").replace(/False/g, "false").replace(/nan/g, '"response"'));

//   } catch (error) {
//   console.error(`Error converting string to JSON object: ${error.message}`);
//   return [];
//   }
//   };

// const batchSize = 100;

// async function convertReviewsInBatches() {
//   let reviews = await arrayOfReviews.find({ "product_id": { $gt: 570000 }  });
//   let batches = [];
  
//   while (reviews.length > 0) {
//     batches.push(reviews.splice(0, batchSize));
//   }

//   for (let i = 0; i < batches.length; i++) {
//     let batch = batches[i];
//     for (let j = 0; j < batch.length; j++) {
//       let review = batch[j];
//       review.reviews = stringToArrayOfObjects(review.reviews_old);
//       await review.save();
//             // console.log('review:', review)
//     }
//   }
// }

// convertReviewsInBatches()
//   .then(() => {
//     console.log("Converted all string fields to arrays of objects successfully");
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     // console.error("Error while converting string fields to arrays of objects: ", err);
//     mongoose.connection.close();
//   });