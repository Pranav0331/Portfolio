import Contact from '../models/Contact.js';

export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, data: { id: contact._id } });
  } catch (err) {
    next(err);
  }
}
