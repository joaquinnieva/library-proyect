import { pool } from '../../../database/database';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const user = await pool.query('SELECT * FROM user');
        return res.status(200).json(user[0]);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case 'POST':
      try {
        const { email, name, image } = req.body;
        const userMail = email;
        const user = await pool.query('SELECT * FROM user WHERE userMail = ?', [userMail]);
        if (user[0].length === 0) {
          const savedUser = await pool.query('INSERT INTO user SET ?', {
            userMail,
            image,
            name,
          });
          const idUser = savedUser[0].insertId;
          return res.status(201).json({
            message: 'User created',
            idUser,
          });
        } else if (user[0].length === 1) {
          return res.status(302).json({ message: 'This user alredy exist' });
        }
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }

    default:
      return res.status(400).json({ message: 'This method is not supported' });
  }
}
