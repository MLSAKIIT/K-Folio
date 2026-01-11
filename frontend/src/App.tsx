import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Background from "./pages/Landing/Background";
import LandingPage from "./pages/Landing/LandingPage";
import CreatePostModal from "./components/Create Post/createPost";
import ProfilePage from "./pages/Profile/ProfilePage";
import Home from "./pages/Home/Homepage"
import "./App.css";

import "./App.css";
import Homepage from "./pages/Home/Homepage";

function App() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Background />} />
        {/* Profile Page */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>

      {/* MODAL (NEW, does NOT affect routes) */}
      {isCreatePostOpen && (
        <CreatePostModal onClose={() => setIsCreatePostOpen(false)} />
      )}
    </BrowserRouter>
  );
}

export default App;