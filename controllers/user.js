const getUsername = (req, res) => {
  res.json({ message: 'Username of the user has been displayed' })
}

module.exports = {
  getUsername
}