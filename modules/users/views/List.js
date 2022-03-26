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



export default users;
