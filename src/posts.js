import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  },
  {
    id: 2,
    title: 'qui est esse',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
  },
];

function Posts() {
  return (
    <>
      <p>Posts Page !</p>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </p>
        );
      })}
    </>
  );
}

export default Posts;
