export { default } from '@/users/views/Item';

export const getServerSideProps = async ({ req, query }) => {
  const { userId } = query;

  if (!userId) {
    req.error(404);
  }

  const rawData = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + userId
  );
  const data = await rawData.json();

  return {
    props: {
      user: { ...data, date: new Date().getMilliseconds() },
    },
  };
};
