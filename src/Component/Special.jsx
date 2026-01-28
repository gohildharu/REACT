import React from "react";
import img1 from '../Image/mall.jpg'
import img2 from '../Image/surat-castle2.jpg'
import img3 from '../Image/Gopi-Talav.jpg'
import img4 from '../Image/science.jpg'
import img5 from '../Image/garden.jpg'
import img6 from '../Image/temple.jpg'
import img7 from '../Image/dumas.jpg'
import img8 from '../Image/galteshwar.jpg'
import img9 from '../Image/ambika.jpg'



const Special = () => {
    const tours = [
        { title: "VR MALL, SURAT", img: img1 },
        { title: "Castle (old fort), suart ", img: img2 },
        { title: "Gopi Talav, surat", img: img3 },
        { title: "Science center , surat", img: img4 },
        { title: "Botnical garden, surat", img: img5 },
        { title: "Kshetrapal Temple, surat", img: img6 },
        { title: "Dumas Beach, surat", img: img7 },
        { title: "Galteshwar, surat", img: img8 },
        { title: "Ambika Niketan Temple, surat", img: img9 },


    ];

    return (
        <section className="tours">
            <h2>Popular Places</h2>
            <p>Choose your favourite place</p>

            <div className="tour-cards">
                {tours.map((tour, index) => (
                    <div className="card" key={index}>
                        {/* <img src={Image}></img> */}
                        <img src={tour.img} alt={tour.title} />
                        <h3>{tour.title}</h3>
                        <p> {tour.price}</p>
                        {/* <button className="btn-small">View Details</button> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Special;

