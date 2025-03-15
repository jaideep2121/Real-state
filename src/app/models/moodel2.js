import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    comment: String,
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contactform || mongoose.model('Contactform', formDataSchema);

export default Contact;
