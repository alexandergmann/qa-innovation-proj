/**
 * Created by alexander.mann on 5/11/2015.
 */
// app/routes.js
var flightDataController = require('../api/controllers/FlightDataController.js');
var bookingController = require('../api/controllers/BookingController.js');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    app.get('/loggedIn', function(req, res) {
        res.json({user: req.user});
    });

    // =====================================
    // Login ===============================
    // =====================================
    app.post('/login', passport.authenticate('login', {
        successRedirect : '/loggedIn', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signUp page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // process the signUp form
    app.post('/signUp', passport.authenticate('signUp', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/' // redirect back to the signUp page if there is an error
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
    });

    // =====================================
    // Flight Search =======================
    // =====================================
    app.post('/searchForFlights', function(req, res) {
        flightDataController.searchForFlights(req.body, res);
    });

    // =====================================
    // Populate DB =========================
    // =====================================
    app.post('/populateDatabase', function(req, res) {
        flightDataController.populateDB(req, res);
    });

    // =====================================
    // Book Flight =========================
    // =====================================
    app.post('/bookflight', function(req, res) {
        bookingController.bookFlight(req, res);
    })
};