import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';
const Engineers = () => {
    const [engineers, setEngineers] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/engineers')
        .then(res => res.json())
        .then(data => setEngineers(data))
    }, [])

    return (
        <section className="Engineers">
            <div className="container">
                <h5 className="text-center  text-danger mb-5">Our Engineers</h5>
                <div className="row">
                    {
                        engineers.map(engineer =><Engineer key={engineer._id} engineer={engineer} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Engineers;