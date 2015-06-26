/**
 * Created by alexander.mann on 5/11/2015.
 */
// app/routes.js
var flightDataController = require('../api/controllers/FlightDataController.js');
var itineraryController = require('../api/controllers/ItineraryController.js');
var userController = require('../api/controllers/UserController.js');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // Login ===============================
    // =====================================
    app.post('/login', passport.authenticate('login'), function(req, res) {
        res.send({user: req.user});
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // process the signUp form
    app.post('/signUp', passport.authenticate('signUp', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/' // orredirect back to the signUp page if there is an err
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.render('index.ejs');
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
    app.post('/bookFlight', function(req, res) {
        itineraryController.bookFlight(req.body, res);
    });

    // =====================================
    // Account Overview ====================
    // =====================================
    app.post('/getUserItineraries', function(req, res) {
        itineraryController.getUserItineraries(req.body, res);
    });

    // =====================================
    // Delete Flights in DB ================
    // =====================================
    app.delete('/deleteFlights', function(req, res) {
        flightDataController.clearFlights(req, res);
    });

    // =====================================
    // Delete Itineraries in DB ============
    // =====================================
    app.delete('/deleteItineraries', function(req, res) {
        itineraryController.clearItineraries(req, res);
    });

    // =====================================
    // Delete Users In DB ==================
    // =====================================
    app.delete('/deleteUsers', function(req, res){
        userController.clearUsers(req, res);
    })
};