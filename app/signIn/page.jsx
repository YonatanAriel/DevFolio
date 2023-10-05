"use client";
import { useState, useRef, useEffect } from "react";
import GenericInput from "../../components/ui/GenericInput";
import { sendSignInData } from "../../functions/frontendFunctions/apiCalls";
import { validateSignInData } from "../../functions/frontendFunctions/validation";
import LoadingSpinner from "../../components/ui/loadingSpinner";
import { useRouter } from "next/navigation";
import Popup from "../../components/ui/popup";
export const metaData = {
  title: "Sign In",
};

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupText =
    "A verification email has been sent to your email address. Please check your inbox, click on the link in the email to verify, and sign in again";
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  useEffect(() => emailRef.current.focus(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoadingSpinner(true);
    setErrorMessage("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!validateSignInData({ email, password }, setErrorMessage)) return;

    try {
      const response = await sendSignInData({ email, password });
      if (response === "User not exist" || response === "password mismatch") {
        setErrorMessage("Wrong email or password");
        setShowLoadingSpinner(false);
        return;
      }
      if (response === "User not verified") {
        setShowPopup(true);
        setShowLoadingSpinner(false);
        return;
      }

      const token = response;
      console.log(token);
      router.push("/");
    } catch (err) {
      setShowLoadingSpinner(false);
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
      {showLoadingSpinner && <LoadingSpinner />}
      {showPopup && <Popup text={popupText} />}
      <h1 className="font-bold text-3xl mb-6">Sign In</h1>
      <GenericInput
        ref={emailRef}
        name={"Email"}
        onChange={() => setErrorMessage("")}
        type={"text"}
        isRequired={true}
        placeholder={"Email"}
      />
      {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
      <GenericInput
        ref={passwordRef}
        name={"Password"}
        type={"password"}
        isRequired={true}
        onChange={() => setErrorMessage("")}
        placeholder={"Password"}
      />
      <button
        type="submit"
        className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign In
      </button>
    </form>
  );
}
