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
        <div className="container">
          <Head />
        </div>
        <hr />
        <div className="container">
          <NavBar handleSearch={handleSearch} />
        </div>
        <hr />
      </header>
      <section className="container mtS">
        <Slider />
      </section>

      <main className="container">
        <Router>
          <Routes>
            <Route path="/" element={<CardNews news={results} />} />
            <Route path="/noticias/:id" element={<PageDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </main>
      <section className="bg-dark">
        <Footer news={news} />
      </section>
      </div>
  );
}

export default App;
