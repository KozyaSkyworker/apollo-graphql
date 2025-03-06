import { useMutation, useQuery } from '@apollo/client';
import { CREATE_POST, GET_ALL_POSTS } from './apollo/posts';
import { List } from './widgets/list';
import { IItemList } from './widgets/list/model';

function App() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_POSTS);
  const [createPost] = useMutation(CREATE_POST);

  if (loading) return 'Loading...';

  if (error) return 'Error!';

  const onSubmit = (formData: FormData) => {
    const title = (formData.get('title') || '') as string;
    createPost({
      variables: {
        title,
        views: 22,
        user_id: '456'
      }
    });

    refetch();
  };

  return (
    <>
      <main>
        <h1>Posts list</h1>
        <form action={onSubmit}>
          <input name='title' />
          <button type='submit'>create post</button>
        </form>
        {!data ? <h3>No data :(</h3> : <List items={data.allPosts as unknown as IItemList[]} />}
      </main>
    </>
  );
}

export default App;
