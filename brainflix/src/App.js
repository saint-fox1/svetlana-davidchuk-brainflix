import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.js";
import UploadVideoPage from "./pages/uploadVideoPage/UploadVideoPage.js";
import HomePage from "./pages/homePage/HomePage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload-video" component={UploadVideoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
