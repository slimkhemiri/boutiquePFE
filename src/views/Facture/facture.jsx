import React from 'react';
import Footer from '../../layouts/Footer/footer';
import Header from '../../layouts/Header/header';
import Navbar from '../../layouts/Navbar/navbar';
import { useLocation } from 'react-router-dom';
import './facture.css';

const Facture = () => {
  const location = useLocation();
  const { name, email, phone, address } = location.state || {};
  if (!name || !email || !phone || !address) {
    return (
      <> 
        <Header />
        <Navbar />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-danger" role="alert">
                  Missing delivery information!
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Navbar />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="billing-details">
                <div className="section-title">
                  <h3 className="title">Invoice </h3>
                </div>
                <div className="order-summary">
                  <div className="order-col">
                    <div>
                      <strong>PRODUCT</strong>
                    </div>
                    <div>
                      <strong>TOTAL</strong>
                    </div>
                  </div>
                  <div className="order-products">
                    {/* TODO: afficher la liste des produits commandés */}
                  </div>
                  <div className="order-col">
                    <div>Subtotal</div>
                    <div>
                      {/* TODO: afficher le sous-total de la commande */}
                    </div>
                  </div>
                  <div className="order-col">
                    <div>Shipping</div>
                    <div>Free</div>
                  </div>
                  <div className="order-col">
                    <div>
                      <strong>TOTAL</strong>
                    </div>
                    <div>
                      {/* TODO: afficher le total de la commande */}
                    </div>
                  </div>
                </div>
                <div className="billing-details">
                  <div className="form-group">
                    <label>Delivery Information:</label>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Facture;
