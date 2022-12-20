import React from 'react'
import Nav_Togl_Btn from './Nav_Togl_Btn'
import Nav_ul from './Nav_ul'
import Nav_Form_Inpt from './Nav_Form_Inpt'
import Nav_Form_Btn from './Nav_Form_Btn'
function Nav_Inner() {
  return (
    <>
    <a className="a-navbar navbar-brand text-light fw-bold " href="#">Navbar</a>
    <Nav_Togl_Btn/>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Nav_ul/>
    <form className="form-inline my-2 my-lg-0 d-flex">
      <Nav_Form_Inpt/>
      <Nav_Form_Btn/>
    </form>
  </div>
    </>
  )
}

export default Nav_Inner