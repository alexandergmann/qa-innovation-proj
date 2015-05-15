/**
 * Created by alexander.mann on 5/11/2015.
 */

module.exports = function(app) {


    app.get('/', function(req, res) {
        res.render('./header.html'); // load the index.ejs file
    });

};