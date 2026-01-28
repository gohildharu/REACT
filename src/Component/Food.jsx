import React from "react";
import img1 from '../Image/khaman.jpg'
import img2 from '../Image/locho.jpg'
import img3 from '../Image/aloopuri.jpg'
import img4 from '../Image/jalebi.jpg'
import img5 from '../Image/ghari.jpg'
import img6 from '../Image/dish.jpg'

const Special = () => {
    const tours = [
        { title: "Khaman", price: "₹20", img: img1 },
        { title: "Locho", price: "₹40", img: img2 },
        { title: "Alupoori, surat", price: "₹20", img: img3 },
        { title: "Jalebi", price: "₹50", img: img4 },
        { title: "Ghari, surat", price: "₹100", img: img5 },
        { title: "Gujrati Thali", price: "200", img: img6 },
    ];

    return (
        <section className="tours">
            <h2>Welcome to the clean and green city</h2>
            <p>Explore our top-rated destinations for your next adventure.</p>

            <div className="tour-cards">
                {tours.map((tour, index) => (
                    <div className="card" key={index}>
                        {/* <img src={Image}></img> */}
                        <img src={tour.img} alt={tour.title} />
                        <h3>{tour.title}</h3>
                        <p> {tour.price}</p>
                        <button className="btn-small">View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Special;