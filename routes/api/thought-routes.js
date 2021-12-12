const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction 
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:id')
    .get(getThoughtById);

router
    .route('/:userId')
    .post(addThought)
    .put(updateThought);

router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;