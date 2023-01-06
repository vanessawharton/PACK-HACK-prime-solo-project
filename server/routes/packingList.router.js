const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET request for all packing lists
router.get('/', (req, res) => {
    const query = `SELECT * FROM "packing_lists"`;
    pool.query(query)
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: Get all packing lists', err);
        res.sendStatus(500)
        })
});

// GET request for selected packing list
router.get('/:id', (req, res) => {
    const packingListId = req.params.id;
    console.log('GET request for selected packing list with ID: ', packingListId);

    const query = `SELECT * FROM "packing_lists"
        JOIN "packing_list_items" 
        ON "packing_list_items"."packing_list_id" = "packing_lists"."id"
        WHERE "packing_lists"."id" = $1;`;
    pool.query(query, [packingListId])
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: Get selected packing list', err);
        res.sendStatus(500)
        })
    });


// POST-- add a new packing list to the DB
router.post('/', (req, res) => {
    console.log('in Post, req.body is: ', req.body);
    const queryText = `
        INSERT INTO "packing_lists" ("title")
        VALUES ($1);
    `;

    pool.query(queryText, [req.body.title])
    .then(() => {
        res.sendStatus(201);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});


// DELETE request for packing list
router.delete('/packinglists/remove/:id', (req, res) => {

    console.log('in router delete');
    pool.query(`DELETE FROM "packing_lists" WHERE "id" = $1 AND "user_id" = $2`, [req.params.id, req.user.id])
    .then((results) => res.sendStatus(200))
    .catch((error) => res.sendStatus(500));
});

module.exports = router;