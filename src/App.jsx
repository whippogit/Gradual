import "./App.css";
import * as Api from "./services/News";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardNews from "./component/CardNews";
import PageDetails from "./component/PageDetails";
import Head from "./component/Head";
import NavBar from "./component/NavBar";
import PageNotFound from "./component/PageNotFound";
import Social from "./component/Social";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Copyright from "./component/Copyright";

function App() {
  //allNews
  const [news, setNews] = useState([]);

  useEffect(() => {
    Api.getAllNews().then(setNews);
  }, []);

  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //filter
  let results = [];
  if (search === undefined) {
    results = news;
  } else {
    results = news.filter((news) =>
      news.description.toLowerCase().includes(search)
    );
  }

  return (
    <div className="App">
      <header className="fixed-top">
        <div className="container d-flex justify-content-between">
          <Head />
        </div>
        <hr />
        <div className="container">
          <NavBar handleSearch={handleSearch} />
        </div>
        <hr />
      </header>
      <div className="container mtS">
        <Slider />
      </div>

      <main className="row">
        <div className="col-2 d-none d-sm-block"></div>
        <div className="col-7">
          <Router>
            <Routes>
              <Route path="/" element={<CardNews news={results} />} />
              <Route path="/noticias/:id" element={<PageDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </div>
        <div className="col-2 d-none d-sm-block">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1675546464/08_250x100_tnehld.gif"
            alt=""
          />
        </div>
      </main>

      <div className="bg-dark">
        <Footer news={news} />
      </div>
      <div className="bg-dark text-light text-center txt-size">
        <Copyright />
      </div>
    </div>
  );
}

export default App;
