import { Users } from './features/users';
import { Posts } from './features/posts';
import { Comments } from './features/comments';

function App() {
  return (
    <>
      <main style={{ display: 'flex' }}>
        <Users />
        <Posts />
        <Comments />
      </main>
    </>
  );
}

export default App;
