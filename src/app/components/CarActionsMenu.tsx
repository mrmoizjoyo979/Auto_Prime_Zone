"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { loadStripe, PaymentMethod } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface PaymentFormProps {
  onPaymentSuccess: (paymentMethod: PaymentMethod) => void; 
}
const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setError(error.message || "An unknown error occurred");
        setProcessing(false);
      } else if (paymentMethod) {
        console.log("PaymentMethod:", paymentMethod);
        onPaymentSuccess(paymentMethod);
        setProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border rounded p-2 mb-4" />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full disabled:opacity-50"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export function CarActionsMenu() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [stripeLoaded, setStripeLoaded] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    if (showPayment) {
      stripePromise.then(() => setStripeLoaded(true));
    }
  }, [showPayment]);

  const handleBookingSubmit = () => {
    if (name && email && phone && startDate && endDate) {
      setShowPayment(true);
    } else {
      alert("Please fill in all fields");
    }
  };


const handlePaymentSuccess = (paymentMethod: PaymentMethod) => { 
  console.log("Payment successful:", {
    startDate,
    endDate,
    name,
    email,
    phone,
    paymentMethod,
  });
  setPaymentCompleted(true);
};

  const handleCompleteBooking = () => {
    console.log("Booking completed:", {
      startDate,
      endDate,
      name,
      email,
      phone,
    });
    setBookingConfirmed(true);
    setTimeout(() => {
      setIsBookingOpen(false);
      setShowPayment(false);
      setPaymentCompleted(false);
      setBookingConfirmed(false);
      setStartDate(null);
      setEndDate(null);
      setName("");
      setEmail("");
      setPhone("");
    }, 3000);
  };

  const handleCancel = () => {
    setIsBookingOpen(false);
    setShowPayment(false);
    setPaymentCompleted(false);
    setBookingConfirmed(false);
    setStartDate(null);
    setEndDate(null);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIsBookingOpen(true)}
        className="w-full py-3 font-bold font-sans bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
      >
        For Booking
      </button>

      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={handleCancel}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Book This Car</h2>
            {!showPayment ? (
              <>
                <p className="mb-4">
                  Enter your booking details below. We&apos;ll get back to you with
                  confirmation shortly.
                </p>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="start-date" className="block mb-1">
                        Start Date
                      </label>
                      <DatePicker
                        id="start-date"
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="end-date" className="block mb-1">
                        End Date
                      </label>
                      <DatePicker
                        id="end-date"
                        selected={endDate}
                        onChange={(date: Date | null) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        className="w-full border rounded px-2 py-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="name" className="block mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full border rounded px-2 py-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full border rounded px-2 py-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full border rounded px-2 py-1"
                    />
                  </div>
                  <button
                    onClick={handleBookingSubmit}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </>
            ) : (
              <div>
                {!paymentCompleted ? (
                  <>
                    <h3 className="text-lg font-semibold mb-4">
                      Payment Details
                    </h3>
                    {stripeLoaded ? (
                      <Elements stripe={stripePromise}>
                        <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
                      </Elements>
                    ) : (
                      <p>Loading payment form...</p>
                    )}
                  </>
                ) : !bookingConfirmed ? (
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">
                      Payment Successful
                    </h3>
                    <p className="mb-4">
                      Your payment has been processed successfully. Click the
                      button below to complete your booking.
                    </p>
                    <button
                      onClick={handleCompleteBooking}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Complete Booking
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">
                      Booking Confirmed
                    </h3>
                    <p>
                      Thank you for your booking. We&apos;ll send you a confirmation
                      email shortly.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
