module.exports = {
  createWord: (req, res) => {
    const { words } = req.body;
  },
  readUser: (req, res) => {
    req.app.get('db').readUser(req.session.user.id).then(users => {
      res.json(users[0]);
    }).catch(error => {
      console.log('-------------- error', error);
      res.json({ message: 'Server error' });
    });
  }
}