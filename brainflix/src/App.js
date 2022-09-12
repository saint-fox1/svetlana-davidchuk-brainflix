import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.js";
import UploadVideoPage from "./pages/uploadVideoPage/UploadVideoPage.js";
import VideoPlayerPage from "./pages/videoPlayerPage/VideoPlayerPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={VideoPlayerPage} />
          <Route path="/upload-video" component={UploadVideoPage} />
          <Route path="/video/:videoId" component={VideoPlayerPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
