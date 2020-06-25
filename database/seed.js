const db = require('./index.js');
const Desc = require('./model.js');
const faker = require('faker');
faker.locale = 'en_US';

// create fake product name
// console.log(faker.commerce.productName())

// create 100 datapoints
const generate100 = (() => {
  // store results
  let generated = [];

  for (let i = 1; i <= 100; i++) {
    // get a new random data point for each
    let img1 = (faker.random.number({'min': 100, 'max': 500}));
    let img2 = (faker.random.number({'min': 100, 'max': 500}));
    // vary the length of product description
    let pLength = (faker.random.number({'min': 3, 'max': 5}));
    // let fakeParagraph = faker.lorem.paragraphs(3);
    // let fakeSentence = faker.lorem.sentence();
    let sampleDesc = {
      // increment the id for each description object
      id: i,
      story: {
        textTop: faker.lorem.paragraphs(pLength),
        imageMiddle: `http://www.fillmurray.com/${img1}/${img1}`,
        imageMiddleCaption: faker.lorem.sentence(),
        textBottom: faker.lorem.paragraphs(pLength)
      },
      risks: faker.lorem.paragraphs(2),
    };
    generated.push(sampleDesc);
  }
  return generated;
});
let data = generate100();

// story: {
//   "text": [{"type": "text", "text": "hello"}, {"type": "image", "src": "https://image.nonexist"}]
// }

const seedDb = () => {
  // Desc.create(sampleDesc) // <- can't drop an empty db
  Desc.collection.drop()
    .then(() => Desc.create(data))
    .then(() => console.log('database seeded!'))
    .catch(() => console.error('error seeding db'));
};

seedDb();