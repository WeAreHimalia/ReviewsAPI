const mongoose = require('mongoose');
mongoose.connect('mongodb://54.193.218.252:27017/reviewdb').then(() => {
    console.log("connected");
}) 


mongoose.set('strictQuery', false);

// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connection to Database Established!'));

const meta_aggregated = new mongoose.Schema({
  product: String,
  // page: Number,
  // count: Number,
  results: [
    {
      review_id: {
        type: Number,
        unique: true
      },
      rating: Number,
      summary: String,
      recommend: Boolean,
      response: {
        type: String,
        default: null
      },
      body: String,
      date: Date,
      reviewer_name: String,
      reviewer_email: String,
      helpfulness: {
        type: Number,
        default: 0
      },
      photos: [{
        id: Number,
        url: String
      }],
      reported: {
        type: Boolean
      }
    }
  ],
  ratings: { 
    // default don't send if empty
    1: String,
    2: String,
    3: String,
    4: String,
    5: String
  },
  recommended: {
    false: String,
    true: String
  },
  characteristics: {
    Fit: Object,
    Length: Object,
    Comfort: Object,
    Quality: Object,
    // name: Object,
    // value: []
  }
});

const Reviews = new mongoose.model('meta_aggregated', meta_aggregated);

Reviews.find({}).then((reviews) =>  {
    console.log('review', reviews);
  })


module.exports.meta_aggregated = Reviews;
