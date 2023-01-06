const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET request for all packing list items
router.get('/', (req, res) => {
    const query = `SELECT * FROM "packing_list_items" WHERE "packing_list_id" =$1`;
    pool.query(query)
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: Get all packing list items', err);
        res.sendStatus(500);
        });
});

// PUT request for changing isPacked status
router.put('/:id', (req, res) => {
    let itemId = req.params.id;

    let isPacked = req.body.isPacked;
    let param = (isPacked == 'true' ? 'false' : 'true');
    console.log('isPacked is:', isPacked);
    console.log('setting item to', param);

    let queryText = `
    UPDATE "packing_list_items" 
    SET "isPacked" = $1 
    WHERE "id" = $2;
    `;

    pool.query(queryText, [param, itemId])
    .then (() => {
        res.sendStatus(200);
    }).catch((error) => {
        alert('error updating packed status', error);
        res.sendStatus(500);
    });
});

// DELETE item
router.delete('/:id', (req, res) => {
    let itemId = req.params.id;
    let queryText = `DELETE FROM "packing_list_items" WHERE "id"=$1;`;

    pool.query(queryText, [itemId]).then(() =>{
        res.sendStatus(200);
    }).catch((error) =>{
        alert('error deleting item', error);
        res.sendStatus(500);
    });
});

module.exports = router;