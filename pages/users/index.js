export { default } from '@/users/views/List';

export const getServerSideProps = async () => {
  const fs = require('fs');

  fs.writeFileSync('file.txt', 'hola mundo y  saludo pa eribel');

  const rawData = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await rawData.json();
  return { props: { users: data } };
};
