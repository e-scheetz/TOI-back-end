'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Products', [
     {
        title: 'Toilet Paper',
        description: `A handy tool for beautifully decorating your neighbors' trees`,
        productImage: 'https://bit.ly/2kTfVVd',
        price: '0.25',
        likes: '1'
      },{
        title: 'Hat',
        description: `All you need to change your identity and lose a tail.`,
        productImage: 'https://bit.ly/2lW4LPQ',
        price: '4.65',
        likes: '3'
      },{
        title: '12 oz Aluminum Can Crusher & Bottle Opener',
        description: `When you're swimming in cans but also happen to be in desperate need of a bottle opener.`,
        productImage: 'https://bit.ly/2lYjUQG',
        price: '11.99',
        likes: '7'
      },{
        title: 'Foldable Solar Panel',
        description: `For when your electric car runs out of juice on the road.`,
        productImage: 'https://bit.ly/2mpCilJ',
        price: '160',
        likes: '6'
      },{
        title: 'Bread',
        description: `Ethically sourced and harvested, humanely formed, and oven baked.`,
        productImage: 'https://bit.ly/2miMiwW',
        price: '21.52',
        likes: '3'
      },{
        title: 'Birthday Puppy',
        description: `They grow up so quickly.`,
        productImage: 'https://bit.ly/2kJgW2p',
        price: '999999999999999',
        likes: '92'
      },{
        title: 'Door',
        description: `Protect yourself from them creepers, zombies, and spiders.`,
        productImage: 'https://bit.ly/2kSRTK7',
        price: '12',
        likes: '21'
      },{
        title: 'Bowl',
        description: `Most useful when empty.`,
        productImage: 'https://bit.ly/2kqD3dz',
        price: '2.25',
        likes: '8700'
      },{
        title: 'Squirt Bottle',
        description: `When filled with window cleaner is excellent at cleaning windows; when filled with water is a humane form of punishment for puppy peeing on the carpet; Do not use the squirt bottle on the dog if you've used cleaner in it previously.`,
        productImage: 'https://bit.ly/2kJndes',
        price: '2.15',
        likes: '7'
      },{
        title: 'Cat Ear Headphones',
        description: `That product everone needs to look like a cat while privately trying to enjoy music.`,
        productImage: 'https://bit.ly/2kSNt5S',
        price: '30.75',
        likes: '5'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Products', null, {});
  }
};
