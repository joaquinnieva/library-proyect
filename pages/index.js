import Post from '../components/Post';
import { getPosts } from '../utils/apiService';

function Home({ data }) {
  return (
    <>
      <div className="grid-cols-3">
        {data.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await getPosts();
  return {
    props: { data },
  };
}
export default Home;
