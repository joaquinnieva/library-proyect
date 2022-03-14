/* eslint-disable import/no-anonymous-default-export */
import { pool } from '../../../database/database';

export default async function (req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const post = await pool.query('SELECT * FROM post WHERE idPost = ?', [id]);
        if (!post) return res.status(484).json({ message: 'Post not found' });
        return res.status(200).json(post[0]);
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }
    case 'PUT':
      try {
        const { description, file } = body;
        const postToUpdate = await pool.query('UPDATE post SET description = ?, file = ? WHERE idPost = ?', [
          description,
          file,
          id,
        ]);
        return res.status(200).json({ message: 'Post updated' });
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }
    case 'DELETE':
      try {
        const postToDelete = await pool.query('DELETE FROM post WHERE idPost = ?', [id]);
        if (!postToDelete) return null;
        return res.status(200).json({ message: 'Post deleted' });
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }

    default:
      return res.status(400).json({ message: 'This method is not supported' });
  }
}
