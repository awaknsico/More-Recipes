//import md5 from 'md5';
const models = require ('../models');


export default {
  create(req, res) {
    if (!/\w{8}/.test(req.body.username)) {
      return res.status(402).send({
        message: 'Enter a username with atleast 8 characters'
      });
    } else if (!/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(req.body.email)) {
      return res.status(402).send({
        message: 'Please enter a valid email'
      });
    } else if (!/^\w{8,12}$/.test(req.body.password)) {
      return res.status(402).send({
        message: 'Please Enter a password with atleast 8 characters'
      });
    }
    return models.Users
      .create({
        username: req.body.username,
        email: req.body.email,
        //md5
        password: (req.body.password)
      })
      .then(user => res.status(201).send({
        username: user.username,
        email: user.email,
        message: 'sign up successful'
      }))
      .catch(error => res.status(400).send({
        error: error.message
      }));
  },

  signin(req, res) {
    if (!/[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(req.body.email)) {
      return res.status(402).send({
        message: 'Please enter a valid email'
      });
    } else if (!/^\w{8,12}$/.test(req.body.password)) {
      return res.status(402).send({
        message: 'Please Enter a password with atleast 8 characters'
      });
    }
    return models.Users
      .findOne({ where:
        { email: req.body.email,
          //md5
          password: (req.body.password) } })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Invalid Username or Password'
          });
        }
        req.session.user = user;
        res.status(202).send({
          username: user.username,
          email: user.email,
          message: 'Sign in successful'
        });
      })
      .catch(error => res.status(400).send({
        message: error.message }));
  }
};