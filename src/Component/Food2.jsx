import React from "react";
import img1 from '../Image/khaman.jpg'
import img2 from '../Image/locho.jpg'
import img3 from '../Image/aloopuri.jpg'
import img4 from '../Image/jalebi.jpg'
import img5 from '../Image/ghari.jpg'
import img6 from '../Image/dish.jpg'
import img7 from '../Image/patudi.jpg'
import img8 from '../Image/patra.jpg'
import img9 from '../Image/idra.jpg'
import img10 from '../Image/samosa.jpg'

const Food2 = () => {
    const famous = [
        { title: "Khaman", price: "₹20", img: img1 },
        { title: "Locho", price: "₹40", img: img2 },
        { title: "Alupoori", price: "₹30", img: img3 },
        { title: "Jalebi", price: "₹50", img: img4 },
        { title: "Ghari", price: "₹400", img: img5 },
        { title: "Gujrati Thali", price: "200", img: img6 },
        { title: "Patudi", price: "400", img: img7 },
        { title: "Patra", price: "40", img: img8 },
        { title: "Idra", price: "40", img: img9 },
        { title: "Samosa", price: "40", img: img10 },
    ];

    return (
        <section className="famous-food">
            <h2>Welcome to the clean and green city</h2>
            <p>Choose your favourite food</p>

            <div className="famous-cards">
                {famous.map((famous, index) => (
                    <div className="card" key={index}>

                        {/* <img src={Image}></img> */}
                        <img src={famous.img} alt={famous.title} />
                        <h3>{famous.title}</h3>
                        <p> {famous.price}</p>
                        <button className="btn-small">View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Food2;