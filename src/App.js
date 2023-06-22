import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import { loader as postsLoader } from "./pages/Posts";
import {
  action as deleteAction,
  loader as postDetailLoader,
} from "./pages/PostDetail";
import PostDetail from "./pages/PostDetail";
import { action as createPostAction } from "./components/PostForm";
import { action as updatePostAction } from "./components/PostForm";
import EditPost from "./pages/EditPost";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Posts />, loader: postsLoader },
        {
          path: "/create-post",
          element: <CreatePost />,
          action: createPostAction,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: postDetailLoader,
          children: [
            {
              index: true,
              element: <PostDetail />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <EditPost />,
              action: updatePostAction
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
