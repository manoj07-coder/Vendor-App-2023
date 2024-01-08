import express  from 'express';
import { google, signIn, signOut, signUp } from '../controllers/auth.js';

const router = express.Router();

router.post('/signin',signIn)
router.post('/signup',signUp)
router.post('/google',google)
router.get('signout',signOut)

export default router;