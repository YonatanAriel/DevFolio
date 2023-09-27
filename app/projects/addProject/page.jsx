"use client";
import GenericInput from "../../../components/ui/GenericInput";
import { useEffect, useState } from "react";

function AddProject() {
  const [isPortfolio, setIsPortfolio] = useState(false);
  const handleSubmit = () => {
    e.preventDefault();
  };
  useEffect(() => console.log(isPortfolio), [isPortfolio]);
  return (
    <>
      <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
        <h1>Add new project</h1>
        <GenericInput
          name={"Project name"}
          required={true}
          placeholder={"What is the project name?"}
        />
        <GenericInput
          name={"Description"}
          required={true}
          placeholder={"Describe the project"}
        />
        <h3>Is this a Portfolio?</h3>
        <GenericInput
          name={"No"}
          checked={!isPortfolio}
          onChange={() => setIsPortfolio(false)}
          type={"radio"}
          containerStyle={"flex items-center mb-4"}
          fullInputStyle={
            "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          }
          fullLabelStyle={
            "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          }
          labelLocation={"last"}
        />
        <GenericInput
          name={"Yes"}
          checked={isPortfolio}
          onChange={() => setIsPortfolio(true)}
          type={"radio"}
          containerStyle={"flex items-center mb-4"}
          fullInputStyle={
            "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          }
          fullLabelStyle={
            "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          }
          labelLocation={"last"}
        />
        <button
          type="submit"
          className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add project
        </button>
      </form>
    </>
  );
}

export default AddProject;
