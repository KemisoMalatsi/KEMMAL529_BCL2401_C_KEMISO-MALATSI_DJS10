import { useState, useEffect } from 'react'


export const App = () => {

  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if(!response.ok) {
          throw new Error("Data fetching failed!")
        }
        return response.json();
      })
      .then((posts) => setData(posts))
      .catch((error) => {
        setError(error.message);
      });
  }, []);


  return (
    <>
      {!error && data? data.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        : null}
      {error ? <h1>{error}</h1> : null}
    </>
  );
}
