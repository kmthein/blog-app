import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './layout/Main';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import { loader as postsLoader } from './pages/Posts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {index: true, element: <Posts />, loader: postsLoader},
        {path: '/create-post', element: <CreatePost />}
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
