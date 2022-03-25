import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'reactstrap';

const users = ({ users }) => {
  // console.log(users);
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <h3>{'Users View'}</h3>
      <Button>{'klk bro'}</Button>
      <ul>
        {users.map((el) => (
          <div key={el.id}>
            <Link href={`/users/[userId]`} as={`/users/${el.id}`}>
              <a>{el.name}</a>
            </Link>{' '}
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const fs = require('fs');

  fs.writeFileSync('file.txt', 'hola mundo y  saludo pa eribel');

  const rawData = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await rawData.json();
  return { props: { users: data } };
};

export default users;
