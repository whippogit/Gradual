function Slider() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active d-flex justify-content-center">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1675546463/banner-blanco_ffjvn1.jpg"
            className="d-block w-100 rounded m-5"
            alt="..."
          
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
