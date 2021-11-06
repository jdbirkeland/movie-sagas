const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  const query = `SELECT "genres"."name","description", "movies"."title" FROM "movies"
JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"`;
  pool.query(query)
    .then(result => {
      console.log('ERROR: Get description and genres', err);
      res.sendStatus(500)
    })
});


router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

module.exports = router;