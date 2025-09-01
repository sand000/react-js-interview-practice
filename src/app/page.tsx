"use client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleBox from "@/components/Animation/ToggleBox";
import StaggeredList from "@/components/Animation/StaggeredList";
import GestureBox from "@/components/Animation/GestureBox";
import ProgressBar from "@/components/Progressbar";

import FormikForm from "@/components/Form-handling/FormikForm";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is missing in .env.local"
  );
}

export const stripePromise = loadStripe(publishableKey);

export default function Home() {
  const [form, setForm] = useState({
    productName: "Demo Product",
    amount: 100,
  });

  const handlePayNow = async () => {
    try {
      const { data } = await axios.post("/api/checkout", form);
      console.log("data", data);
      const stripe = await stripePromise;

      if (!stripe) {
        console.error("Stripe failed to initialize");
        return;
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (error) {
        console.error("Stripe Redirect Error:", error);
      }
    } catch (err) {
      console.error("Payment Init Error:", err);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-"
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <button
            className="bg-white text-black rounded-2xl py-5 px-15 text-2xl"
            onClick={handlePayNow}
          >
            Pay Now
          </button>
        </main>
      </motion.div>
      {/* <ToggleBox />
      <StaggeredList />
      <GestureBox /> */}
      {/* <ProgressBar/> */}
      <FormikForm />
    </div>
  );
}
