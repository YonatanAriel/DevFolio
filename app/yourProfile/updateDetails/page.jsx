"use client";

import { useContext, useEffect, useRef, useState } from "react";
import GenericInput from "../../../components/ui/genericInput";
import LoadingSpinner from "../../../components/ui/loadingSpinner";
import Popup from "../../../components/ui/popup";
import { validateUpdatedDetails } from "../../../functions/frontendFunctions/validation";
import { updateDetails } from "../../../functions/frontendFunctions/apiCalls";
import { MainContext } from "../../../context/mainContext";

export default function UpdateDetails() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({
    name: "",
    occupation: "",
    about: "",
    portfolioLink: "",
    photo: "",
  });
  const { token } = useContext(MainContext);
  const nameRef = useRef();
  const popupText = "Great! Your details have been updated.";
  useEffect(() => nameRef.current.focus(), []);

  useEffect(() => {
    if (errorMessage) alert(errorMessage);
  }, [errorMessage]);

  const filterObj = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (obj[key] !== "") {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setShowLoadingSpinner(true);
    const filteredDetails = filterObj(updatedDetails);
    if (filteredDetails.length === 0) {
      setErrorMessage("You have not updated any fields");
      return;
    }
    if (!validateUpdatedDetails(filteredDetails, setErrorMessage)) return;
    const response = await updateDetails(updatedDetails, token);
    // if (response) setShowLoadingSpinner(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 lg:w-96 mx-auto py-20 overflow-hidden"
    >
      {showLoadingSpinner && <LoadingSpinner />}
      {/* <Popup key={popupText} text={popupText} goBackButton={true} /> */}
      <h1 className="font-bold text-3xl mb-6">Update Details</h1>{" "}
      <GenericInput
        ref={nameRef}
        name={"Name"}
        type={"text"}
        placeholder={"Name"}
        onChange={(e) =>
          setUpdatedDetails((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <GenericInput
        name={"Occupation"}
        type={"text"}
        placeholder={"Occupation"}
        onChange={(e) =>
          setUpdatedDetails((prev) => ({ ...prev, occupation: e.target.value }))
        }
      />
      <GenericInput
        name={"About yourself"}
        type={"text"}
        placeholder={"About"}
        onChange={(e) =>
          setUpdatedDetails((prev) => ({ ...prev, about: e.target.value }))
        }
      />
      {errorMessage && <p>{errorMessage}</p>}
      <GenericInput
        name={"Portfolio link"}
        type={"text"}
        placeholder={"Portfolio link"}
        onChange={(e) =>
          setUpdatedDetails((prev) => ({
            ...prev,
            portfolioLink: e.target.value,
          }))
        }
      />
      <GenericInput
        type={"file"}
        name={"Profile photo"}
        accept={"image/*"}
        onChange={(e) =>
          setUpdatedDetails((prev) => ({ ...prev, photo: e.target.files[0] }))
        }
        fullLabelStyle={
          "block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        }
        fullInputStyle={
          "block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        }
      />
      {/* {serverError && <p className="text-red-500 my-5">{serverError}</p>} */}
      <button
        type="submit"
        className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
}
