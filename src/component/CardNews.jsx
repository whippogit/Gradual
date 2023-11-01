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
          <h5 className="titulo">{newsapi.title}</h5>
          <p className="description">{newsapi.description}</p>
          <div className="footer-card">
            <em>Dirección de Información Pública</em>
          </div>
        </Link>
      ))}
      ,
    </div>
  );
}

export default CardNews;
