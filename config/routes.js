/**
 * Created by alexander.mann on 5/11/2015.
 */
// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs', { errorMessage: req.flash('errorMessage')}); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    //app.get('/login', function(req, res) {
    //
    //    // render the page and pass in any flash data if it exists
    //    res.render('home.ejs', { message: req.flash('loginMessage') });
    //});

    app.get('/login', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/loggedIn', function(req, res) {
        res.render('loggedIn.ejs');
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);
    // process the login form
    app.post('/login', passport.authenticate('login', {
        successRedirect : '/loggedIn', // redirect to the secure profile section
        failureRedirect : '/stuff', // redirect back to the signUp page if there is an error
        failureFlash : true // allow flash messages
    }));

    //app.post('/login', passport.authenticate('login', {
    //    successRedirect : '/signedInIndex',
    //    failureRedirect : '/'
    //}));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signUp form
    //app.get('/signUp', function(req, res) {
    //
    //    // render the page and pass in any flash data if it exists
    //    res.render('signUp.ejs', { message: req.flash('signupMessage') });
    //});

    // process the signUp form
    // app.post('/signUp', do all our passport stuff here);
    // process the signUp form
    app.post('/signUp', passport.authenticate('signUp', {
        successRedirect : '/login', // redirect to the secure profile section
        failureRedirect : '/login' // redirect back to the signUp page if there is an error
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    //app.get('/profile', isLoggedIn, function(req, res) {
    //    res.render('profile.ejs', {
    //        user : req.user // get the user out of session and pass to template
    //    });
    //});

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    //res.redirect('/');
}