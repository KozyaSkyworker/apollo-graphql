import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from './apollo/posts';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return 'Loading...';

  if (error) return 'Error!';

  return (
    <>
      <main>
        <h1>Posts list</h1>
        {!data ? (
          <h3>No data :(</h3>
        ) : (
          <ul>
            {data.allPosts?.map((itm) => (
              <li key={itm?.id}>
                {itm?.id}
                {itm?.title}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
