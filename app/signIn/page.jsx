"use client";
import { useState, useRef, useEffect } from "react";
import GenericInput from "../../components/ui/GenericInput";
import { sendSignInData } from "../../functions/frontendFunctions/apiCalls";
import { validateSignInData } from "../../functions/frontendFunctions/validation";

export const metaData = {
  title: "Sign In",
};

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => emailRef.current.focus(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!validateSignInData({ email, password }, setErrorMessage)) return;

    try {
      const response = await sendSignInData({ email, password });
      if (response === "User not exist" || response === "password mismatch") {
        setErrorMessage("Wrong email or password");
        return;
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
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
