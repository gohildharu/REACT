import React from 'react';
import img1 from '../Image/Surat-Castle1.jpg';
import img2 from '../Image/bridge.jpg';
import img3 from '../Image/empty-square-lake-city-park.jpg';
import img4 from '../Image/tapi.jpg';
// import Hotel from '../Images/hotel.avif'

function Main() {
  return (
    <div className="">

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={img1} className="d-block h-500 w-100" alt="First slide" />
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block h-500 w-100" alt="Second slide" />
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block h-500 w-100" alt="Third slide" />
          </div>
{/* 
          <div className="carousel-item">
            <img src={img4} className="d-block h-500 w-100" alt="fourth slide" />
          </div> */}

        </div>


        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>


      </div>
    </div>
  );
}

export default Main;

