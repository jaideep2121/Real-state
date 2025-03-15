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

const FormData =
  mongoose.models.FormData || mongoose.model('FormData', formDataSchema);

export default FormData;

