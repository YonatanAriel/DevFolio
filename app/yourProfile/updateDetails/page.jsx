"use client";

import { useContext, useEffect, useRef, useState } from "react";
import GenericInput from "../../../components/ui/genericInput";
import LoadingSpinner from "../../../components/ui/loadingSpinner";
import Popup from "../../../components/ui/popup";
import { validateUpdatedDetails } from "../../../functions/frontendFunctions/validation";
import { updateDetails } from "../../../functions/frontendFunctions/apiCalls";
import { MainContext } from "../../../context/mainContext";
import { useRouter } from "next/navigation";

export default function UpdateDetails() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({
    name: "",
    occupation: "",
    about: "",
    portfolioLink: "",
    photo: "",
  });
  const { token } = useContext(MainContext);
  const router = useRouter();
  const nameRef = useRef();
  const popupText = "Great! Your details have been updated.";
  useEffect(() => nameRef.current.focus(), []);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, [3000]);
    }
  }, [errorMessage]);

  const filterObj = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (obj[key] !== "") {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  };

  const handleResponse = () => {
    setShowLoadingSpinner(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      router.back();
    }, [1500]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    setShowLoadingSpinner(true);
    const filteredDetails = filterObj(updatedDetails);
    if (filteredDetails.length === 0) {
      setErrorMessage("You have not updated any fields");
      setShowLoadingSpinner(false);
      return;
    }
    if (!validateUpdatedDetails(filteredDetails, setErrorMessage)) {
      setShowLoadingSpinner(false);
      return;
    }
    const response = await updateDetails(filteredDetails, token);
    if (response) handleResponse();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 lg:w-96 mx-auto py-20 overflow-hidden"
    >
      {showLoadingSpinner && <LoadingSpinner />}
      {showPopup && <Popup key={popupText} text={popupText} />}
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
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <button
        type="submit"
        className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
}
