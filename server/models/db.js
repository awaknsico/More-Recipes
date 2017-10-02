let db = [];

db.recipes = [
  {
    id: 1,
    userId: 1,
    recipeName: 'Plantain Pottage',
    ingredient: [
      'plantain',
      'fish',
      'oil',
      'pepper',
      'crayfish'
    ],
    preparation:'Peel your plantain and start chopping into small pieces.',
    upvotes: 25,
    downvotes: 5,
  },

  {
    id: 2,
    userId: 2,
    recipeName: 'Jollof Rice',
    ingredient: [
      'rice',
      'oil',
      'pepper'
    ],
    preparation:'Wash you rice and start parboiling it up to 20 minutes.',
    upvotes: 45,
    downvotes: 7,
  }
];

db.review = [];

export default db;
