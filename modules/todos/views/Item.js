import { useRouter } from 'next/router';

const User = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>{'Loading...'}</div>;
  }

  return (
    <div>
      <h3>{`Identificador #${post.id}`}</h3>
      <h3>{`Titulo ${post.title}`}</h3>
      <h3>{`Date ${post.date}`}</h3>
    </div>
  );
};

export const getStaticPaths = () => {
  const paths = [
    { params: { todoId: '1' } },
    { params: { todoId: '2' } },
    { params: { todoId: '3' } },
  ];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { todoId } = params;
  if (!todoId) {
    req.error(404);
  }

  const rawData = await fetch(
    'https://jsonplaceholder.typicode.com/todos/' + todoId
  );

  const data = await rawData.json();

  return {
    props: {
      post: { ...data, date: new Date().getMilliseconds() },
    },
  };
};

export default User;
