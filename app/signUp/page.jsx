"use client";
import GenericInput from "../../components/ui/GenericInput";
export const metaData = {
  title: "Sign Up",
};
export default function signUp() {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
      <h1 className="font-bold text-3xl mb-6">Sign Up</h1>
      <GenericInput
        name={"Email"}
        type={"text"}
        isRequired={true}
        placeholder={"Email"}
      />
      <GenericInput
        name={"Password"}
        type={"password"}
        isRequired={true}
        placeholder={"Password"}
      />
      <button
        type="submit"
        className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </form>
  );
}
