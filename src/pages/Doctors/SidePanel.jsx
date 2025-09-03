/* eslint-disable react/prop-types */

import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "./../../config";

const SidePanel = ({ ticketPrice, timeSlots, doctorId }) => {
  const bookingHandler = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log("Checkout response:", data);

      if (!data.success) {
        alert("Failed to create order!");
        return;
      }

      // ✅ Razorpay options
      const options = {
        key: data.key, // Razorpay key from backend
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Physiospot",
        description: "Doctor Appointment Booking",
        order_id: data.order.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              `${BASE_URL}/bookings/verify-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(response),
              }
            );

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              // ✅ Direct redirect (no popup/alert)
                window.location.href = "/checkout-success"; // ✅ redirect to success screen
            } else {
              alert("Payment verification failed!");
            }
          } catch (err) {
            console.error("Verification error:", err);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      // ✅ Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log("Booking error:", error);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}:
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)}
                <span> - </span>
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={bookingHandler} className="px-2 btn w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
