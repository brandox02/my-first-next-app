import React, { useState, useEffect, useReducer } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('unknown action');
  }
};

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // console.log({ state });
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await rawData.json();
      const endpoint = window.location.origin + '/api/hello';
      const f = await fetch(endpoint);
      const realData = await f.json();

      dispatch({ type: 'increment' });
      
      // console.log({ realData });
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <h3>{'Posts'}</h3>
      <ul>
        {posts.map((el) => (
          <div className="post_item" key={el.id}>
            <Link href={`/posts/[postId]`} as={`/posts/${el.id}`}>
              <a>{el.title}</a>
            </Link>{' '}
            <br />
          </div>
        ))}
      </ul>
      <style jsx>{`
        .post_item {
          margin:10px;
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Index;
