import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Background from "./pages/Landing/Background";
import LandingPage from "./pages/Landing/LandingPage";
import CreatePostModal from "./components/Create Post/createPost";
import ProfilePage from "./pages/Profile/ProfilePage";
import Home from "./pages/Home"
import "./App.css";

import "./App.css";

function App() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* NAVBAR (unchanged, only button added) */}
      <nav style={{ padding: 12, display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>

        {/* TEMP Create Post Button */}
        <button
          onClick={() => setIsCreatePostOpen(true)}
          style={{ marginLeft: "auto" }}
        >
          Create Post
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Background />} />
        {/* Profile Page */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      {/* MODAL (NEW, does NOT affect routes) */}
      {isCreatePostOpen && (
        <CreatePostModal onClose={() => setIsCreatePostOpen(false)} />
      )}
    </BrowserRouter>
  );
}

export default App;
