import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IgwrrIm08qvmvJs3bTX84J66rai9HfJqCycINKDUtzsL77h2pCSd8qh2Ho3n79TcCYmed3dz3bpMkt0xsMgie2S0099ORnoZR');

const CheckoutService = () => {
    

    return (
        <div className="mt-5">
            <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
            </Elements>    
        </div>
    );
};

export default CheckoutService;