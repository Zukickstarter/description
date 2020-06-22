const db = require('./index.js')
const Desc = require('./model.js')

const sampleDesc = [
  {
    id: 0,
    story: {
      text: `Pink Bellies started as a food truck with the mission of sharing joy through Vietnamese comfort food. With all of your continuous support, we've outgrown our mobile eatery and secured a permanent location on upper King St.

      "The genesis of our cooking is the juxtaposition of preserving traditional Vietnamese food while being inspired by it!" - Thai Phi, owner & chef

      Our menu focuses on using the most delicious local ingredients while adhering to Thai's Vietnamese roots and culinary style. Dishes range from traditional comfort dishes like mắm ruốc ba rọi with local vegetable crudités and caramelized claypot fish to Vietnamese-American representations like garlic noodles with pulled pork and Miss Paula's shrimp sủi cảo dumplings.
      `,
      images: [{
        src: `https://ksr-ugc.imgix.net/assets/029/121/841/9b4a37ec7c4c81340e56df64db40c9eb_original.JPG?ixlib=rb-2.1.0&w=680&fit=max&v=1589750990&auto=format&frame=1&q=92&s=97a6efa803d161841a1462fe6c19e36a`,
        caption: `Phở Dặc Biệt`
      },
        {
        src: `https://ksr-ugc.imgix.net/assets/029/089/211/868eaea17cac0490e245b9cc03eb6f22_original.JPG?ixlib=rb-2.1.0&w=680&fit=max&v=1589482551&auto=format&frame=1&q=92&s=098a79b94f284e2a34590cb5705bab69`,
        caption: `Pink Bellies Restaurant Under Construction, Summer 2020
        `
      }]
    },
    risks: `Collectively, we are facing and overcoming the coronavirus. As an upcoming restaurant, the major obstacles have been rising opportunity costs and budget costs - permit and inspection delays from the city, construction delays from subcontractors, and previous government mandated working hours.

    Our solution is to set a very realistic timeline that encompasses all potential fluctuations. Buildout progress will be updated weekly with exclusive behind the scenes photos for campaign backers. We are hard at work everyday to open the restaurant by the projected date of summer 2020!`,
  }
]

const seedDb = () => {
  Desc.collection.drop()
    .then(() => Desc.create(sampleDesc))
    .then(() => console.log(Desc))
    .catch(() => console.error('error seeding db'))
}

seedDb();