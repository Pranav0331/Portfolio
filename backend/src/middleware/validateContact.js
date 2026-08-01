export function validateContact(req, res, next) {
  const { name, email, message } = req.body;
  const errors = [];

  if (!name?.trim()) errors.push('Name is required');
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required');
  }
  if (!message?.trim() || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  if (errors.length) {
    return res.status(400).json({ success: false, message: errors.join(', ') });
  }

  next();
}
