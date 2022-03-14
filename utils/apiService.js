import axios from 'axios';

export async function getPosts(params) {
  const result = await axios.get('http://localhost:3000/api/posts');
  return result;
}
