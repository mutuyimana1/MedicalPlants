import React from "react";
import product from "../assets/images/product-1-1 (1).png"
import { ShippingAddressForm } from "./Forms/ShippingForm";
import { PaymentMethodForm } from "./Forms/PaymentForm";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Checkout = () => {
  return (
    <div className="w-full">
    <NavBar/>
      <div className="w-[80%] bg-white gap-4 m-auto flex mt-32 relative">
        <div className="w-[60%] bg-white border px-20 py-4 border-gsray-400">
          <div>
            <h1 className="text-lg font-semibold py-4">Delivery Address</h1>
            <div>
              <ShippingAddressForm />
            </div>
            <div className="mt-5">
              <PaymentMethodForm />
            </div>
          </div>
        </div>
        <div className="w-[40%] fixed top-[7.8rem] p-3 right-4 bg-gray-100 ">
          <div className="flex gap-5 p-5">
            <div className="relative">
              <img
                src={product}
                width={50}
                height={50}
                alt="Picture of the Logo"
                className="border border-orange-300 p-1 rounded-sm"
              />
              <div className="w-6 h-6 rounded-full bg-gray-500 text-center absolute top-[-7px] right-[-7px]">
                <span className="text-[12px] text-white">30</span>
              </div>
            </div>
            <div className="mt-2 w-[20rem]">
              <p>Banana Juice suited product</p>
              <p className="text-[#030229B2] text-sm pt-2">product details</p>
            </div>
            <div className=" mt-3"></div>
            <div className="mt-5 ">
              <p>388</p>
            </div>
          </div>
          <div className="flex gap-5 p-5">
            <div className="relative">
              <img
                src={product}
                width={50}
                height={50}
                alt="Picture of the Logo"
                className="border border-orange-300 p-1 rounded-sm"
              />
              <div className="w-6 h-6 rounded-full bg-gray-500 text-center absolute top-[-7px] right-[-7px]">
                <span className="text-[12px] text-white">3</span>
              </div>
            </div>
            <div className="mt-2 w-[20rem]">
              <p>Banana Juice suited product</p>
              <p className="text-[#030229B2] text-sm pt-2">product details</p>
            </div>
            <div className=" mt-3"></div>
            <div className="mt-5 ">
              <p>388</p>
            </div>
          </div>
          <div className="mt-5 ml-5 mr-10">
            <h1 className="py-3 font-semibold text-lg ">Payment Details</h1>
            <p className="py-2 text-gray-500 flex justify-between pr-12">
              Sub Total <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between pr-12">
              Shipping <span>3000</span>
            </p>
            <p className="py-2 text-gray-500 flex justify-between pr-12">
              Total <span>3000 Rfw</span>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Checkout;
