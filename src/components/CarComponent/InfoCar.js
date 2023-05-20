import React, { Fragment, useContext, useMemo } from "react";
import GeneralContext from "../../context/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import FormCar from "./FormCar";

const collectionOrders = "ordenes";

const InfoCar = () => {
  const { car, cleanCar } = useContext(GeneralContext);
  const navigate = useNavigate();

  

  const _totalCompra = useMemo(() => {
    return car.reduce((acc, item) => acc + item.price, 0);
  }, [car]);

  const _order = useMemo(() => {
    const items = car.map((item) => ({ item, amount: 1 }));
    const date = new Date().toLocaleDateString("es-MX");
    const orderId= ""
    return { date, items, orderId };
  }, [car]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, collectionOrders);
    addDoc(orderCollection, _order).then(({ id }) => {
      alert(`Orden de compra creada folio: ${id}`);
      cleanCar();
      navigate("/");
      ;
    });
  };


  return (
    <Fragment>
      <FormCar />
      <div className="row">
        <div >
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>Resumen de su compra</td>
              </tr>
              <tr>
                <td className="h5">Articulos: </td>
                <td className="h5"> {" " + car.length + " "} Unidades</td>
              </tr>
              <tr>
                <td className="h5">Total: </td>
                <td className="h5">${_totalCompra}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button disabled={car.length === 0} onClick={actionBuy} className="btn btn-primary mt-5">
                    Finalizar Compra
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoCar;