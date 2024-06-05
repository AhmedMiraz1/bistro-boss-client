import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO : add publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_PYMENT_GETWAY_PK)
const Payment = () => {
    return (
        <div>

            <SectionTitle heading='payment' SubHeading='please pay to payment'/>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                   
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;