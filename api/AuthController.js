/**
 * Created by alexander.mann on 5/11/2015.
 */
// app/routes.js

exports.index(function(req, res) {
    res.render('index.ejs');
});

exports.login = passport.authenticate('login', {
    successRedirect : '/',
    failureRedirect : '/'
});

exports.signUp = passport.authenticate('signUp', {
    successRedirect : '/login',
    failureRedirect : '/'
});

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/login');
};

