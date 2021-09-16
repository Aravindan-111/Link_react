import { useRouteMatch, useParams } from 'react-router-dom';

function Post() {
  const match = useRouteMatch();
  const params = useParams();
  return (
    <>
      <p>Post page - {params.id} </p>
    </>
  );
}

export default Post;
