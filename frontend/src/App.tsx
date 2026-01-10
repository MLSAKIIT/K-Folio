import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

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
