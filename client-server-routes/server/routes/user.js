const axios = require('axios');
const { Router } = require('express');
const router = Router();

// this is a pure server call
// to simulate things like getting data from database, etc
const userData = require('../../data.js');

router.route('/getUser').get(getUser);

// This one will be called from client side only
function getUser(req, res) {
  getAllUsers()
    .then(response => {
      res.status(200).json({ data: response });
    })
    .catch(e => {
      res.status(500);
    });
}

// this is the core logic to get all users
// this will be used in getUser to define the route /api/getUser
// this will also be used in the route /user to render the page
function getAllUsers() {
  return new Promise((resolve, reject) => {
    getUserFromAPI()
      .then(response => {
        const user1 = response.data;
        const user2 = userData;
        resolve([user1, user2]);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function getUserFromAPI() {
  return axios.get('http://api.haochuan.io/github/users/mojombo');
}

module.exports = {
  getAllUsers: getAllUsers,
  router: router
};
