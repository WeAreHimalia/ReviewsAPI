const csv = require('csvtojson')
const db = require('./SCHEMAS/mongodb.js')

// final data
const reviewsData = '/Users/priscilla/ReviewsAPI/data/reviews.csv'
const reviewsPhotos = '/Users/priscilla/ReviewsAPI/data/reviews_photos.csv'
const characteristics = '/Users/priscilla/ReviewsAPI/data/characteristics.csv'
const characteristicReviews = '/Users/priscilla/ReviewsAPI/data/characteristic_reviews.csv'




// /*
//  * Requires the MongoDB Node.js Driver
//  * https://mongodb.github.io/node-mongodb-native
//  */
// const agg = [
//   {
//     '$unwind': '$reviews'
//   }, {
//     '$lookup': {
//       'from': 'reviews_photos', 
//       'localField': 'reviews.id', 
//       'foreignField': 'review_id', 
//       'as': 'reviews.photos'
//     }
//   }, {
//     '$out': 'withphotos'
//   }
// ];
// const client = await MongoClient.connect(
//   'mongodb://localhost:27017/',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const coll = client.db('reviewdb').collection('arrayOfReviews');
// const cursor = coll.aggregate(agg);
// const result = await cursor.toArray();
// await client.close();

// // var sampleata =
// // [
// //   {
// //     _id: ObjectId("63c34dc0eefe9e942bdad7e1"),
// //     product: '71705',
// //     page: 1,
// //     count: 5,
// //     results: [
// //       {
// //         review_id: 1278259,
// //         rating: 4,
// //         summary: 'summary',
// //         recommend: true,
// //         response: null,
// //         body: 'rjirhturhrudhrtifhdijeiejirjifrjdirjirtjdfijdijdijed',
// //         date: '2023-01-07T00:00:00.000Z',
// //         reviewer_name: 'tvo',
// //         helpfulness: 0,
// //         photos: [
// //           {
// //             id: 2457050,
// //             url: 'http://res.cloudinary.com/djfpzruso/image/upload/v1673118844/r63e0zgpunosamkw2nap.jpg'
// //           }
// //         ]
// //       },
// //       [
// //         {
// //           review_id: 1278260,
// //           rating: 3,
// //           summary: 'summary 2',
// //           recommend: false,
// //           response: null,
// //           body: 'body test',
// //           date: '2023-01-07T00:00:00.011Z',
// //           reviewer_name: 'richi',
// //           helpfulness: 1,
// //           photos: []
// //         }
// //       ]
// //     ],
// //     ratings: { '1': '10', '2': '10', '3': '10', '4': '10', '5': '10' },
// //     recommended: { false: '1', true: '5' },
// //     characteristics: {
// //       Size: { id: '240611', value: 1 },
// //       Width: { id: '240612', value: 2 },
// //       Comfort: { id: '240613', value: 3 },
// //       Quality: { id: '240614', value: 4 }
// //     },
// //     reported: false
// //   }
// // ]



// // // start with insertion of review data
// // let readWriteQuestions = async () => {
// //   await csv().fromFile(questionSample)
// //     .subscribe((json, lineNum) => {
// //       return new Promise((resolve, reject) => {
// //         resolve(db.insert({
// //           question_id: json.id,
// //           product_id: json.product_id,
// //           question_body: json.body,
// //           question_date: json.date_written,
// //           asker_name: json.asker_name,
// //           asker_email: json.asker_email,
// //           question_reported: json.reported,
// //           question_helpfulness: json.helpful,
// //           answers: []
// //         }))
// //       })
// //     })
// // }

// // // next add the answer data
// // let readWriteAnswers = async () => {
// //   await csv().fromFile(answerSample)
// //     .subscribe((json, lineNum) => {
// //       return new Promise((resolve, reject) => {
// //         let question_id = json.question_id
// //         resolve(db.answerInsert(question_id, json))
// //       })
// //     })
// // }

// // // finally, add the photo urls for the answers
// // let readWriteAnswerPhotos = async () => {
// //   console.log('photos')
// // }


// // // initial load of data
// // let initialLoad = async () => {
// //   // await readWriteQuestions()
// //   await readWriteAnswers()
// //   // await readWriteAnswerPhotos()
// // }

// // initialLoad()

async function convertReviews() {
  const client = new MongoClient(uri, { useNewUrlParser: true });

  try {
    await client.connect();

    const db = client.db("test");
    const collection = db.collection("arrayofreviews");

    const reviews = await collection.find({}).toArray();
    for (const review of reviews) {
      const reviewsArray = review.review.split(',');
      await collection.updateOne({ _id: review._id }, { $set: { review: reviewsArray } });
    }
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

convertReviews();