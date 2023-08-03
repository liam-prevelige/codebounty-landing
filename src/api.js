/* eslint-disable valid-jsdoc */
// api.js: wrappers for all API endpoints

const API_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5001' : 'https://codebounty-server.onrender.com';
// const API_URL = 'https://codebounty-server.onrender.com';

/**
 * /signup/:email
 *
 * Uploads a user's email for the beta signup
 *
 */
export const addSignupEmail = async (email) => {
  console.log(API_URL);
  const response = await fetch(`${API_URL}/signup/${email}`, {
    method: 'GET',
    headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json',
    },
    cache: 'default',
  });

  if (!response.ok) {
    throw new Error('Call to /signup/:email failed');
  }
};