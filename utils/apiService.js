import axios from 'axios';

export async function getPosts() {
  try {
    const result = await axios.get('http://localhost:3000/api/posts');
    return result;
  } catch (error) {
    return error;
  }
}
export async function postPosts(value) {
  try {
    const result = await axios.post('http://localhost:3000/api/posts',value);
    return result;
  } catch (error) {
    return error;
  }
}
export async function getUser(name) {
  try {
    const { data } = await axios.get('http://localhost:3000/api/user/' + name);
    return data[0];
  } catch (error) {
    return error;
  }
}
export async function postUser(values) {
  try {
    const result = await axios.post('http://localhost:3000/api/user', values);
    return result;
  } catch (error) {
    return error;
  }
}
