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
        const user = await pool.query('SELECT * FROM user WHERE name = ?', [id]);
        if (!user) return res.status(484).json({ message: 'User not found' });
        return res.status(200).json(user[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case 'PUT':
      try {
        const { userMail, name, image } = body;
        const userToUpdate = await pool.query('UPDATE user SET userMail = ?, name = ?, image = ? WHERE idUser = ?', [
          userMail,
          name,
          image,
          id,
        ]);
        return res.status(200).json({ message: 'User updated' });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: 'This method is not supported' });
  }
}
