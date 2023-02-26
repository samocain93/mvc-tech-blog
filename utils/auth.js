const withAuth = (req, res, next) => {
    // TODO: Add a comment describing the functionality of this if statement
    // Checks if the user is logged in. If not, redirects to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;