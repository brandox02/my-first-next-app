import Head from 'next/head';
import Link from 'next/link';

export default ({ todos }) => {
  const TodoList = () => {
    const upperFirstChar = (string) =>
      `${string[0].toUpperCase()}${string.substr(1)}`;

    return todos.map((el) => (
      <div key={el.id}>
        <Link href={`/todos/[todoId]`} as={`/todos/${el.id}`}>
          <a>
            {' '}
            <strong>{el.id}</strong> {upperFirstChar(el.title)}
          </a>
        </Link>{' '}
        <br />
      </div>
    ));
  };

  return (
    <div>
      <Head>
        <title>Todos</title>
      </Head>
      <h3>{'Todo View'}</h3>
      <TodoList />
      <ul>{}</ul>
      <style jsx>{`
        * {
          margin: 20px 0px;
        }
      
      `}</style>
    </div>
  );
};

export const getStaticProps = async () => {
  const rawData = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await rawData.json();
  return { props: { todos: data } };
};
