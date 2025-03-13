import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_POSTS, CREATE_POST } from '../../../apollo/posts';
import { List, IItemList } from '../../../widgets/list';

export const Posts = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  const [createPost] = useMutation(CREATE_POST, {
    update(cache, { data }) {
      const { allPosts } = cache.readQuery({ query: GET_ALL_POSTS });

      cache.writeQuery({
        query: GET_ALL_POSTS,
        data: {
          allPosts: [data?.createPost, ...allPosts]
        }
      });
    }
  });

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
  };

  return (
    <div>
      <h1>Posts list</h1>
      <form action={onSubmit}>
        <input name='title' />
        <button type='submit'>create post</button>
      </form>
      {!data ? <h3>No data :(</h3> : <List items={data.allPosts as unknown as IItemList[]} />}
    </div>
  );
};
