import axios from 'axios';

export async function getPosts() {
  try {
    const result = await axios.get('http://localhost:3000/api/posts');
    return result;
  } catch (error) {
    return error;
  }
}
export async function postUser(values) {
  try {
    console.log(values);
    // const result = await axios.post('http://localhost:3000/api/user');
    // return result;
  } catch (error) {
    return error;
  }
}
export async function getUser(params) {
  try {
    const result = await axios.get('http://localhost:3000/api/user');
    return result;
  } catch (error) {
    return error;
  }
}
