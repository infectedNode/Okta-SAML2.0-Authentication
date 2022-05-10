module.exports = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      error: 'Unauthorized'
    });
  } else {
    return res.status(200).json({
      user: req.user
    });
  }
};