const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        title: 'The Conqueror',
        description: 'One who conquered'
    }
    res.json(obj);
})

module.exports = router;