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
        const user = await pool.query('SELECT * FROM user WHERE idUser = ?', [id]);
        if (!user) return res.status(484).json({ message: 'User not found' });
        return res.status(200).json(user[0]);
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }
    case 'PUT':
      try {
        const { userMail, name } = body;
        const userToUpdate = await pool.query('UPDATE user SET userMail = ?, name = ? WHERE idUser = ?', [
          userMail,
          name,
          id,
        ]);
        return res.status(200).json({ message: 'User updated' });
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }
    default:
      return res.status(400).json({ message: 'This method is not supported' });
  }
}
