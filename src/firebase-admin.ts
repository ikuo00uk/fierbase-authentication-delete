require('dotenv').config();
import * as admin from 'firebase-admin';

const path = require('path');
const dir = path.resolve(__dirname, '../')

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(dir + process.env.CREDENTIAL_URL),
  databaseURL: process.env.FIREBASE_URL,
});

export default firebaseAdmin