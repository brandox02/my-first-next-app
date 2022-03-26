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



export default User;
