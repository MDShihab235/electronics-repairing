import React from 'react';
import pic1 from '../../../images/pic1.jpg';
import pic2 from '../../../images/pic2.jpg';
import pic3 from '../../../images/pic3.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Hardware Repair',
        img: pic1
    },
    {
        name: 'Mobile Repair',
        img: pic2
    },
    {
        name: 'PC Repair',
        img: pic3
    }
]

const Services = () => {
    return (
        <section className="services-container pt-5 bg-dark pb-5">
            <div className="text-center text-info">
                <h2>Services We Provide You for Repairing</h2>
            </div>
            <div className="d-flex justify-content-center text-white">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;