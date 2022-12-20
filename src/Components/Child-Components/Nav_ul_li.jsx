import React from 'react'
import Nav_ul_li_a from './Nav_ul_li_a'
import Nav_ul_li_div from './Nav_ul_li_div'
function Nav_ul_li() {
    return (
        <>
            <li className="nav-item active fw-bold me-2">
                <a className="nav-link text-light" href="#">Home </a>
            </li>
            <li className="nav-item fw-bold me-3">
                <a className="nav-link text-light" href="#">Link</a>
            </li>
            <li className="nav-item dropdown fw-bold me-3">
               <Nav_ul_li_a/>
               <Nav_ul_li_div/> 
            </li>
            <li className="nav-item">
                <a className="nav-link disabled fw-bold text-light me-3" href="#">Disabled</a>
            </li>
        </>
    )
}

export default Nav_ul_li