import React from 'react'
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <div id="error-page">
        <div className="container content">
          <h2 className="header">404</h2>
          <h4>Sorry page not found</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem illo dolorum suscipit nulla beatae rem quisquam
            architecto nobis, ratione corrupti?
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error
