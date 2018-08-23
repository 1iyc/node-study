var query1 = function() {
    return new Promise(function(resolve, reject) {
        connection.query(sql1, req.params.id)
        .then((rows) => {            
            resolve(rows[0]);
        });            
    });
};

var query2 = function() {
    return new Promise(function(resolve, reject) {
        connection.query(sql2, req.params.id)
        .then((rows) => {
            resolve(rows);
        });
        
    });
};

var query3 = function() {
    return new Promise(function(resolve, reject) {
        connection.query(sql3)
        .then((rows) => {
            resolve(rows);
        });            
    });
};

Promise.all([query1(), query2(), query3()])
.then(function (values) {
    var results = {data:{one:{}, two:{}, three:{}}};
    results['data']['one'] = values[0];
    results['data']['two'] = values[1];
    results['data']['three'] = values[2];
    //console.log(results);
    res.status(200).json(results);
})
.catch(function(err) {
    console.log(err);
});