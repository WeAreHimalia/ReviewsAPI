const { json } = require("express");


const stringToArrayOfObjects = (string) => {
    try {
      console.log('stringg', string.replace(/'/g, '"'))
    return JSON.parse( string.replace(/'/g, '"').toString());
  
    } catch (error) {
    console.error(`Error converting string to JSON object: ${error.message}`);
    return [];
    }
    };

    console.log(stringToArrayOfObjects("[{'id': 1, 'rating': 5, 'photos': []}, {'id': 1, 'rating': 5, 'photos': []}]"));
    console.log(JSON.parse('[{"id": 1, "rating": 5, "photos": []}, {"id": 1, "rating": 5, "photos": []}]'))