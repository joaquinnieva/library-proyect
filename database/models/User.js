import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: false },
  password: { type: String, required: false },
  name: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
