import React from 'react'
import Main_inner_div_ol from './Main_inner_div_ol'
import Main_inner_div_coursel_inner from './Main_inner_div_coursel_inner'
import Main_inner_div_a from './Main_inner_div_a'
function Main_inner() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <Main_inner_div_ol/>
                <div className="carousel-inner">
                    <Main_inner_div_coursel_inner/>
                </div>
                <Main_inner_div_a/>
            </div>
        </>
    )
}

export default Main_inner