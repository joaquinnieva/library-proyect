/* eslint-disable import/no-anonymous-default-export */
import Post from '../../../database/models/Post.js';
import { dbConnect } from '../../../database/mongoose';

dbConnect();

export default async function (req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const post = await Post.findById(id);
        if (!post) return res.status(484).json({ msg: 'Post not found' });
        return res.status(200).json(post);
      } catch (error) {
        return res.status(400).json({ msg: error.msg });
      }

    case 'PUT':
      try {
        const { title } = body;
        const postToUpdate = await Post.findByIdAndUpdate(id, body);
        if (!postToUpdate) return res.status(484).json({ msg: 'Post not found' });
        return res.status(201).json({ msg: 'Post updated', title });
      } catch (error) {
        return res.status(400).json({ msg: error.msg });
      }

    case 'DELETE':
      try {
        const postToDelete = await Post.findByIdAndRemove(id);
        const { title } = postToDelete;
        return res.status(200).json({ msg: 'Post deleted', title });
      } catch (error) {
        return res.status(400).json({ msg: error.msg });
      }

    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
}
