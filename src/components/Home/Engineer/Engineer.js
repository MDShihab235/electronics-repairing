import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Engineer = ({engineer}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            {
                engineer.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${engineer.image.img}`}/>
                :
                <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://thawing-retreat-01863.herokuapp.com/${engineer.img}`} alt=""/>
            }
            
            <h4>{engineer.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-15555555</p>
        </div>
    );
};

export default Engineer;