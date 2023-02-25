// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const reviewsRouter = require('./routes.js');
const  { meta_aggregated } = require('../models/reviews.js');

// const autoIncrement = require('mongoose-auto-increment');

const app = express();

// mongoose.set('strictQuery', true); // DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// mongoose.connect('mongodb://localhost/reviewsSDC'); // Old copy with 600k reviews seeded
// mongoose.connect('mongodb://localhost/reviews_sdc');
// mongoose.connect('mongodb://localhost/reviewsImport');
// mongoose.connect('mongodb://localhost/reviewdb');
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connection to Database Established!'));
// meta_aggregated.find({}).then((reviews) =>  {
//   console.log('review', reviews);
// })


app.use(express.json());
app.get('/reviews', async (req, res) => {

    meta_aggregated.find({}).then((reviews) =>  {
      console.log('review', reviews);
    })
  // try {
  //   console.log('test1', req.query.product_id);
  //   // const reviews = await meta_aggregated.findOne({ product: req.query.product_id })
  //   const reviews = meta_aggregated.find({});
  //   reviews.then((reviews) =>  {
  //     console.log('review', reviews);
  //   })
  //   // {'product': req.query.product_id }
  //   // product: req.query.product_id }).select({ "results._id": 0 
  //   const reviewData = {
  //     product: reviews.product,
  //     page: 1,
  //     count: reviews.results.length,
  //     results: reviews.results
  //   };
  //   res.json(reviewData);
  // } catch (err) {
  //    res.status(500).json({ message: err.message });
  // }
});


app.get('/abc', (req, res) => {
  console.log('reached')
  res.status(200).send('complete');
});


// const reviewSchema = new mongoose.Schema({
//   product: String,
//   page: Number,
//   count: Number,
//   results: [
//     {
//       review_id: {
//         type: Number,
//         unique: true
//       },
//       rating: Number,
//       summary: String,
//       recommend: Boolean,
//       response: {
//         type: String,
//         default: null
//       },
//       body: String,
//       date: Date,
//       reviewer_name: String,
//       reviewer_email: String,
//       helpfulness: {
//         type: Number,
//         default: 0
//       },
//       photos: [{
//         id: Number,
//         url: String
//       }],
//       reported: {
//         type: Boolean
//       }
//     }
//   ],
//   ratings: { // default don't send if empty
//     1: String,
//     2: String,
//     3: String,
//     4: String,
//     5: String
//   },
//   recommended: {
//     false: String,
//     true: String
//   },
//   characteristics: [{
//     id: Number,
//     name: String,
//     value: []
//   }]
// });
// reviewSchema.plugin(autoIncrement.plugin, {
//   model: 'Review',
//   field: 'results.review_id',
//   startAt: 5775000,
//   incrementBy: 1
// });

app.listen(3030, () => console.log(`Server on localhost 3030...`));

// module.exports = db;