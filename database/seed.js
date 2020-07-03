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
    let img1 = (faker.random.number({'min': 250, 'max': 680}));
    let img2 = (faker.random.number({'min': 250, 'max': 680}));
    // vary the length of product description
    let mLength = (faker.random.number({'min': 5, 'max': 7}));
    let sLength = (faker.random.number({'min': 2, 'max': 3}));
    // let fakeParagraph = faker.lorem.paragraphs(3);
    // let fakeSentence = faker.lorem.sentence();
    let sampleDesc = {
      // increment the id for each description object
      id: i,
      story: {
        textTop: faker.lorem.paragraphs(mLength).replace(/[\n\r]/g, '\n'),
        imageMiddle: {url: `https://picsum.photos/id/${i}/${img1}/${img2}`, w: img1, h: img2},
        imageMiddleCaption: faker.lorem.sentence(),
        textBottom: faker.lorem.paragraphs(mLength).replace(/[\n\r]/g, '\n')
      },
      risks: faker.lorem.paragraphs(sLength).replace(/[\n\r]/g, '\n'),
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
  Desc.create(data);
/*    Desc.collection.drop()
      .then(() => Desc.create(data))
      .then(() => console.log('database seeded!'))
      .catch((err) => console.error('error seeding db: ' + err));
  });
*/};

setTimeout(seedDb, 0);
