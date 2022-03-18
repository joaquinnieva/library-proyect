import axios from 'axios';

const URL = 'https://librery-app.vercel.app';

export async function getPosts() {
  try {
    const result = await axios.get(URL + '/api/posts');
    return result;
  } catch (error) {
    return error;
  }
}
export async function postPosts(value) {
  try {
    const result = await axios.post(URL + '/api/posts', value);
    return result;
  } catch (error) {
    return error;
  }
}
export async function getUser(name) {
  try {
    const { data } = await axios.get(URL + '/api/user/' + name);
    return data[0];
  } catch (error) {
    return error;
  }
}
export async function postUser(values) {
  try {
    const result = await axios.post(URL + '/api/user', values);
    return result;
  } catch (error) {
    return error;
  }
}
