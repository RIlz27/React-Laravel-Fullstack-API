import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import Create from "./pages/Posts/Create";
import Show from "./pages/Posts/Show";
import Update from "./pages/Posts/Update";
import { UserProfile } from "./pages/Profile/UserProfile";
import Layout from "./pages/layout";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/create" element={user ? <Create /> : <Login />} />
          <Route path="/profile" element={user ? <UserProfile /> : <Login />} />

          <Route path="/posts/:id" element={<Show />} />
          <Route
            path="/posts/update/:id"
            element={user ? <Update /> : <Login />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
