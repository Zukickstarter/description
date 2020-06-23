const db = require('./index.js');
const Desc = require('./model.js');
const faker = require('faker');

// create 100 datapoints
const generate100 = (() => {
  // store results
  let generated = []

  let fakeNumber = faker.random.number();
  let img1 = (faker.random.number({'min': 100,'max': 500}))
  let img2 = (faker.random.number({'min': 100,'max': 500}))
  let fakeParagraph = faker.lorem.paragraphs(3);
  let fakeSentence = faker.lorem.sentence();

  for (let i = 0; i < 100; i++) {
    let sampleDesc = {
      id: i,
      story: {
        text: fakeParagraph,
        images: [{
          src: `http://www.fillmurray.com/${img1}/${img1}`,
          caption: fakeSentence
        },
          {
          src: `http://www.fillmurray.com/${img2}/${img2}`,
          caption: fakeSentence
        }]
      },
      risks: fakeParagraph,
    }
    generated.push(sampleDesc);
  }
  return generated;
})
let data = generate100()
console.log(data)

const seedDb = () => {
  // Desc.create(sampleDesc) // <- can't drop an empty db
  Desc.collection.drop()
    .then(() => Desc.create(data))
    .then(() => console.log('database seeded!'))
    .catch(() => console.error('error seeding db'))
}

seedDb();