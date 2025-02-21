import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Home from './views/Home/Home';
import { Post } from 'views/Post/Post';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/post',
    Component: Post,
  },
  {
    path: '/about-us',
    Component: AboutUs,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
