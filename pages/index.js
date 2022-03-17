/* eslint-disable react-hooks/exhaustive-deps */
import { useSession } from 'next-auth/react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { getPosts } from '../utils/apiService';

function Home({ data }) {
  const { data: session, status } = useSession();
  return (
    <div className="grid">
      <div>{status === 'authenticated' && <PostForm />}</div>
      <div className="grid-cols-3">
        {data.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { data } = await getPosts();
  return {
    props: { data },
  };
}
export default Home;
