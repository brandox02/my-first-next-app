export { default } from '@/todos/views/List';


export const getStaticProps = async () => {
  const rawData = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await rawData.json();
  return { props: { todos: data } };
};