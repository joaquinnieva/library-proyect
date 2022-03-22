/* eslint-disable react-hooks/exhaustive-deps */
import { useSession } from 'next-auth/react';
import HeaderBanner from '../components/HeaderBanner';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { getPosts } from '../utils/apiService';

function Home({ Posts }) {
  const { data: session, status } = useSession();

  return (
    <div className="grid">
      <HeaderBanner></HeaderBanner>
      <div>{status === 'authenticated' && <PostForm />}</div>
      <div className="grid-cols-3">
        {Posts.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { data } = await getPosts();
  const Posts = data.reverse();
  return {
    props: { Posts },
  };
}
export default Home;
