const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product
      }
    ]
  })
  .then(tag => {
    res.json(tag)
    console.log('showing all tags');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product
    }
  ]
  })
  .then(tag => {
    res.json(tag);
    console.log('showing tag by id');
  })
  .catch(err => {
    console.log(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
