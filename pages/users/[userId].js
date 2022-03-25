const user = ({ user }) => {
  return (
    <div>
      <h3>{`Identificador #${user.id}`}</h3>
      <h3>{`Usuario ${user.username}`}</h3>
      <h3>{`Nombre ${user.name}`}</h3>
      <h3>{`Date ${user.date}`}</h3>
    </div>
  );
};

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

export default user;
