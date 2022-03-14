import { pool } from '../../../database/database';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const posts = await pool.query('SELECT * FROM post');
        return res.status(200).json(posts[0]);
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }
    case 'POST':
      try {
        const { description, file, idUser } = req.body;
        const savedPost = await pool.query('INSERT INTO post SET ?', {
          description,
          file,
          idUser,
        });
        return res.status(201).json({
          message: 'Post saved',
          description,
          file,
        });
      } catch (error) {
        return res.status(400).json({ error });
      }

    default:
      return res.status(400).json({ message: 'This method is not supported' });
  }
}
