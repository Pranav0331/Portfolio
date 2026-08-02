import { Router } from 'express';
import { createContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validateContact.js';

const router = Router();

router.post('/', validateContact, createContact);

export default router;
