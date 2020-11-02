const router = require('express').Router();
const db = require('../models');

router.get('/api/workouts', function(req,res) {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post('/api/workouts', function(req,res) {
  db.Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.put('/api/workouts/:id', function({ body, params }, res) {
  db.Workout.findByIdAndUpdate(params.id, { $push: {exercises: body} }, {new: true, runValidators: true } )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  })
});

router.get('/api/workouts/range', function(req,res) {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.delete('/api/workouts', function({ body }, res) {
  db.Workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;