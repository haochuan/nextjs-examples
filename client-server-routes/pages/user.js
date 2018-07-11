import React, { Component } from 'react';
import Layout from '../components/MyLayout.js';
import axios from 'axios';

const User = props => {
  console.log('props start');
  console.log(props);
  console.log('props end');
  return <Layout>Hello</Layout>;
};

User.getInitialProps = async function({ req, res }) {
  const isServer = !!req;
  if (isServer) {
    const { users } = res.locals;
    console.log('got data in server side:');
    return { data: users };
  } else {
    const response = await axios.get('/api/getUser');
    console.log('got data in client side.');
    return { data: response.data };
  }
};

export default User;
