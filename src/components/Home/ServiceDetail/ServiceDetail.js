import React from 'react';
import './ServiceDetail.css';
import {Link} from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center container">
            <img className="zoom" style={{height: '200px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <h6 className="text-info">$20-$500</h6>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            <button className="btn btn-danger"><Link to="/checkoutService"><span className="text-white">Repair it</span></Link></button>
        </div>
    );
};

export default ServiceDetail;