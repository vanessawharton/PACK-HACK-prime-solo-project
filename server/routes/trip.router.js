const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET request for all trips
router.get('/', (req, res) => {
    const query = `SELECT * FROM "trips"`;
    pool.query(query)
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: Get all trips', err);
        res.sendStatus(500)
        })
});

// GET request for selected trip
router.get('/:id', (req, res) => {
    const tripId = req.params.id
    console.log('GET request for selected trip with ID: ', tripId);

    const query = `SELECT * FROM "trips"`;
    pool.query(query, [tripId])
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: Get selected trip', err);
        res.sendStatus(500)
        })
    });


// POST-- add a new trip to the DB
router.post('/', (req, res) => {
    console.log('in Post, req.body is: ', req.body);
    // RETURNING "id" will give us back the id of the created trip
    const insertTripQuery = `
    INSERT INTO "trips" ("title", "start_date", "end_date", "location")
    VALUES ($1, $2, $3, $4)
    RETURNING "id";`

    // FIRST QUERY MAKES TRIP
    pool.query(insertTripQuery, [req.body.newTrip.title, req.body.newTrip.start_date, req.body.newTrip.end_date, req.body.newTrip.location])
    .then(result => {
        
    //added trip id save to junction table
    const createdTripId = result.rows[0].id;

    // Catch for first query
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
});

// PUT request to edit trip details
router.put('/:id', (req, res) => {
    console.log('in PUT request', req.params.id, req.body);
    const query = `UPDATE "trip" SET "title" = $1, "start_date" = $2, "end_date" = $3, "location" = $5 WHERE "id" = $6;`;
    // set up values
    const values = [req.body.title, req.body.startDate, req.body.endDate, req.body.location, req.params.id];
    // send query to DB
    pool.query(query, values).then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(`Problem with PUT request to DB,`, err)
        res.sendStatus(500);
    });
})

//DELETE request for trip
router.delete('/:id', (req, res) => {

    console.log('in router delete');
    pool.query(`DELETE FROM "trips" WHERE "id" = $1 AND "user_id" = $2`, [req.params.id, req.user.id])
    .then((results) => res.sendStatus(200))
    .catch((error) => res.sendStatus(500));
});

module.exports = router;