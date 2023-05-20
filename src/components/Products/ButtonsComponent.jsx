import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const ButtonsComponents = (props) => {
    const {showDelete,showInfo,removeThisItem,idProduct} = props
  return (
    <Fragment>
      {showDelete ? (
        <button className="btn btn-sm" onClick={removeThisItem}>
          ❌
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink className="navLinkA" to={`/productos/detalles/${idProduct}`}>
          ➕
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ButtonsComponents;