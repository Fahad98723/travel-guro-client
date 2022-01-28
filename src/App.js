import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogIn from './Page/Shared/LogIn/LogIn';
import Register from './Page/Shared/Register/Register';
import SingleBlog from './Page/SingleBlog/SingleBlog';
import PostBlog from './Page/PostBlog/PostBlog';
import AllBlogs from './Page/AllBlogs/AllBlogs';
import MakeAdmin from './Page/MakeAdmin/MakeAdmin';
import Contact from './Page/Contact/Contact';
import AddExperience from './Page/AddExperience/AddExperience';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import Dashboard from './Page/Dashboard/Dashboard';
import UsersBlog from './Page/UsersBlog/UsersBlog';
import AdminRoute from './Page/AdminRoute/AdminRoute';
import UpdatePost from './Page/UpdatePost/UpdatePost';
import Explore from './Page/Explore/Explore';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="body">
    <AuthProvider>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route  path="/login" element={<LogIn />} />     
          <Route  path="/register" element={<Register />} />     
          <Route  path="/postBlog" element={<PostBlog />} />     
          <Route  path="/allBlogs" element={<AllBlogs />} />     
          <Route  path="/explore" element={<Explore />} />     
          <Route  path="/makeAdmin" element={<MakeAdmin />} />     
          <Route  path="/contact" element={<Contact />} />     
          <Route  path="/addExperience" element={<PrivateRoute><AddExperience /></PrivateRoute>} />     
          <Route  path="/singleBlog/:id" element={<SingleBlog />} /> 
          <Route path="/dashboard" element={<AdminRoute>
              <Dashboard />
            </AdminRoute>}>
              <Route exact path="/dashboard" element={<AllBlogs></AllBlogs>}>
              </Route>
              <Route exact path="/dashboard/postBlog" element={<PostBlog></PostBlog>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin></MakeAdmin>}>

              </Route>    
              <Route path={`/dashboard/userBlogs`} element={<UsersBlog></UsersBlog>}>
              </Route>    
              <Route path={`/dashboard/edit/:id`} element={<UpdatePost></UpdatePost>}>
              </Route>    
            </Route>    
    </Routes>
  </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;
