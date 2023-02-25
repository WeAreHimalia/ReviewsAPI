const express = require('express');
const router = express.Router();
const reviewsdb = require('../models/reviews.js');


// GET Review Data
// router.get('/reviews', async (req, res) => {
//   try {
//     console.log('test1', req.query)
//     const reviews = await reviewsdb.findOne({});
//     //{ product: JSON.stringify(req.query.product_id) }.select({ _id: 0, "results._id": 0 });
//     console.log('review', reviews)
//     const reviewData = {
//       product: reviews.product,
//       page: 1,
//       count: reviews.count,
//       results: reviews.results
//     };
//     res.json(reviewData);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// router.get('/meta', async (req, res) => {
//   try {
//     const metaGet = await Review.findOne({ product: req.query.product_id }).select("product ratings recommended characteristics").lean().then((result) => {
//       result.product_id = result.product;
//       delete result.product;
//       (result.characteristics).shift();
//       const charArray = result.characteristics;
//       const charObj = {};
//       const transformedChars = charArray.map((obj) => {
//         // const charObj = {};
//         charObj[obj.name] = {
//           id: obj.id,
//           value: ((((obj.value).reduce((acc, currentObj) => {
//             return acc + Number(currentObj.value);
//           }, 0))) / (obj.value).length).toString()
//         };
//         return charObj;
//       });
//       // result.characteristics = transformedChars;
//       result.characteristics = charObj;
//       delete result._id;
//       return result;
//     });
//     res.json(metaGet);

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


module.exports = router;