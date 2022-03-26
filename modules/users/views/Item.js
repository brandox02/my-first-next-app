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


export default user;
