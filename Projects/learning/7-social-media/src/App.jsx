import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import Postlist from "./components/Postlist";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Headers />
        <div className="d-flex main-content">
          <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
          <div className="content">
            {selectedTab === "Home" ? <Postlist /> : <CreatePost />}
          </div>
        </div>
        <Footer />
      </div>
    </PostListProvider>
  );
}

export default App;
