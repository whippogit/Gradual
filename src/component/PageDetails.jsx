import { useParams } from "react-router-dom";
import * as Api from "../services/News";
import { useState, useEffect } from "react";
import "./PageDetails.css";

function PageDetails() {
  const [noticia, setNoticia] = useState({});

  const params = useParams();

  useEffect(() => {
    Api.getNewsById(params.id)
      .then(setNoticia)

      .catch(console.log);
  }, [params]);

  return (
    <div className="container">
      <em className="text-secondary">
        {noticia.category}
      </em>
      <h4 className="mt-5 text-center text-decoration-underline">{noticia.title}</h4>
      <div className="d-flex justify-content-center">
        <img className="w-img" src={noticia.image_url} alt={noticia.title} />
      </div>

      <p className="mt-5"><strong>{noticia.description}</strong></p>
      <p className="textoP">{noticia.content}</p>
    </div>
  );
}

export default PageDetails;
