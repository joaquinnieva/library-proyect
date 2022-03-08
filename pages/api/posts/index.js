import Post from '../../../database/models/Post.js';
import { dbConnect } from '../../../database/mongoose';

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const posts = await Post.find();
      return res.status(200).json(posts);

    case 'POST':
      const newPost = new Post(req.body);
      const savedPost = await newPost.save();
      return res.status(201).json(savedPost);

    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
}
