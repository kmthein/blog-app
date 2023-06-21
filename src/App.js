import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import { loader as postsLoader } from './pages/Posts';
import { action, loader as postDetailLoader } from './pages/PostDetail';
import PostDetail from './pages/PostDetail';
import { action as createPostAction } from './pages/CreatePost';
import EditPost from './pages/EditPost';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {index: true, element: <Posts />, loader: postsLoader},
        {path: '/create-post', element: <CreatePost />, action: createPostAction},
        {path: '/post-detail/:id', element: <PostDetail />,  loader: postDetailLoader, action: action},
        {path: '/edit/:id', element: <EditPost />}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
