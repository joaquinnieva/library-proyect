/* eslint-disable react-hooks/exhaustive-deps */
import { useSession } from 'next-auth/react';
import HeaderBanner from '../components/HeaderBanner';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { getPosts } from '../utils/apiService';

function Home({ data }) {
  const { data: session, status } = useSession();
  const Posts = data.reverse();
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
  return {
    props: { data },
  };
}
export default Home;
