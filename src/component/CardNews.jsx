import "./CardNews.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

function CardNews({ news }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const loader = () => {
    return (
      <div className="container p-0">
        {news.map((newsapi) => (
          <Link
            reloadDocument
            to={`/noticias/${newsapi._id}`}
            key={newsapi._id}
            title={newsapi.title}
            className="cardContainer align-top"
          >
            <img src={<Skeleton />} alt="" />
            <div >
              <h1>
                <Skeleton />
              </h1>
            </div>
            <div className="titulo">
              <Skeleton />
            </div>
            <p className="description">
              <Skeleton />
            </p>
            <div className="footer-card">
              <div className="by">
                <Skeleton />
              </div>
            </div>
          </Link>
        ))}
        ,
      </div>
    );
  };

  if (loading) {
    return loader();
  } else {
    return (
      <div className="container p-0">
        {news.map((newsapi) => (
          <Link
            reloadDocument
            to={`/noticias/${newsapi._id}`}
            key={newsapi._id}
            title={newsapi.title}
            className="cardContainer align-top"
          >
            <img src={newsapi.image_url} alt={newsapi.title} />
            <div className="categoria">
              <h6>{newsapi.category}</h6>
            </div>
            <div className="titulo">{newsapi.title}</div>
            <p className="description">{newsapi.description}</p>
            <div className="footer-card">
              <div className="by">Dirección de Información Pública</div>
            </div>
          </Link>
        ))}
        ,
      </div>
    );
  }
}

export default CardNews;
