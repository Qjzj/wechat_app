let express = require('express');
let router = express.Router();

router.get('/jsonp', (req, res) => {
    let data = req.query;
    console.log(data);
    let callBack = data.callBack;
    console.log(callBack);
    let result = {
        "name":'zs',
        "age": 18
    };
    result = JSON.stringify(result);
    res.end(callBack+'('+ result +')');
    // res.json(result);
    // res.json(123);

})
router.get('/jsonp2', (req, res) => {
    let data = req.query;
    console.log(data);
    let callBack = data.callBack;
    console.log(callBack);
    let result = {
        "name":'zs',
        "age": 18
    };
    result = JSON.stringify(result);
    res.end('(' + callBack  + ')'+'('+ result +')');
    // res.json(result);
    // res.json(123);

})

module.exports = router;