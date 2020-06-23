const db = require('./index.js');
const Desc = require('./model.js');
const faker = require('faker');

// create fake product name
// console.log(faker.commerce.productName())

// create 100 datapoints
const generate100 = (() => {
  // store results
  let generated = []

  for (let i = 1; i <= 100; i++) {
    // get a new random data point for each
    let img1 = (faker.random.number({'min': 100,'max': 500}))
    let img2 = (faker.random.number({'min': 100,'max': 500}))
    // let fakeParagraph = faker.lorem.paragraphs(3);
    // let fakeSentence = faker.lorem.sentence();
    let sampleDesc = {
      id: i,
      story: {
        text: faker.lorem.paragraphs(3),
        images: [{
          src: `http://www.fillmurray.com/${img1}/${img1}`,
          caption: faker.lorem.sentence()
        },
          {
          src: `http://www.fillmurray.com/${img2}/${img2}`,
          caption: faker.lorem.sentence()
        }]
      },
      risks: faker.lorem.paragraphs(3),
    }
    generated.push(sampleDesc);
  }
  return generated;
})
let data = generate100();

const seedDb = () => {
  // Desc.create(sampleDesc) // <- can't drop an empty db
  Desc.collection.drop()
    .then(() => Desc.create(data))
    .then(() => console.log('database seeded!'))
    .catch(() => console.error('error seeding db'))
}

seedDb();