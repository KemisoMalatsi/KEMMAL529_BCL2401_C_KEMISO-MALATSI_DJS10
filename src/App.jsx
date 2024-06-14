import { useState, useEffect } from 'react'


export const App = () => {

  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/post")
      .then((response) => response.json())
      .then((posts) => setData(posts))
      .catch((error) => {
        setError(error);
      });
  }, []);


  return (
    <>
      {!error && data? data.map((post) => (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        : null}
      {error ? <h1>{error}</h1> : null}
    </>
  );
}
