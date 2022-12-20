import React from 'react'
import Img1 from './shop-keeper.jpg';

function Main_inner_div_coursel_inner() {

    return (
        <>
            <div className="carousel-item active">
                <img className="d-block w-100" src={Img1}  alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100"  alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100"  alt="Third slide" />
            </div>
        </>
    )
}

export default Main_inner_div_coursel_inner