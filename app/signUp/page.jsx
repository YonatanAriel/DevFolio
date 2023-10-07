"use client";

import { useEffect, useRef, useState } from "react";
import GenericInput from "../../components/ui/genericInput";
import { sendSignUpData } from "../../functions/frontendFunctions/apiCalls";
import LoadingSpinner from "../../components/ui/loadingSpinner";
import { validateSignUpData } from "../../functions/frontendFunctions/validation";
import Popup from "../../components/ui/popup";

export const metaData = {
  title: "Sign Up",
};

export default function SignUp() {
  const [newLink, setNewLink] = useState({ text: "", href: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    occupation: "",
    about: "",
    email: "",
    password: "",
    confirmPassword: "",
    portfolioLink: "",
    links: [],
    photo: "",
  });
  const popupText =
    "Great! A verification email has been sent to your email address. Please check your inbox and click on the link in the email to complete the registration process";
  const nameRef = useRef();
  useEffect(() => nameRef.current.focus(), []);

  useEffect(() => {
    if (errorMessage) alert(errorMessage);
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignUpError("");
    if (!validateSignUpData(userData, setErrorMessage)) return;
    setShowLoadingSpinner(true);

    const response = await sendSignUpData(userData);
    if (response) setShowLoadingSpinner(false);
    if (response == "Email sent") {
      setIsEmailSent(true);
    } else if (response == "User already exist") {
      setSignUpError("email already exist in the system");
    } else if (response == "Unexpected error") {
      setSignUpError("An unexpected error occurred. Please try again");
    } else setErrorMessage("");
  };

  const addLink = () => {
    if (
      !newLink?.text.trim() ||
      !newLink?.href.trim() ||
      !(userData.links.length < 3)
    )
      return;
    setUserData((prev) => ({
      ...prev,
      links: [...prev.links, newLink],
    }));
    setNewLink({ text: "", href: "" });
  };

  const removeLink = (index) => {
    const updatedLinks = userData.links;
    updatedLinks.splice(index, 1);
    setUserData((prev) => ({ ...prev, links: updatedLinks }));
  };
  return (
    <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
      {showLoadingSpinner && <LoadingSpinner />}
      {isEmailSent && <Popup key={popupText} text={popupText} />}
      <h1 className="font-bold text-3xl mb-6">Sign Up</h1>{" "}
      <GenericInput
        ref={nameRef}
        name={"What is your name?"}
        type={"text"}
        isRequired={true}
        placeholder={"name"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <GenericInput
        name={"What is your occupation?"}
        type={"text"}
        isRequired={true}
        placeholder={"Occupation"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, occupation: e.target.value }))
        }
      />
      <GenericInput
        name={"Tell us about yourself"}
        type={"text"}
        isRequired={true}
        placeholder={"About"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, about: e.target.value }))
        }
      />
      <GenericInput
        name={"What is your Email?"}
        type={"email"}
        isRequired={true}
        placeholder={"Email"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      {errorMessage && <p>{errorMessage}</p>}
      <GenericInput
        name={"Choose password"}
        type={"password"}
        isRequired={true}
        placeholder={"Password"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <GenericInput
        name={"Confirm password"}
        type={"password"}
        isRequired={true}
        placeholder={"Password"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, confirmPassword: e.target.value }))
        }
      />
      <GenericInput
        name={"Add a link to your portfolio website"}
        type={"text"}
        isRequired={false}
        placeholder={"Portfolio link"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, portfolioLink: e.target.value }))
        }
      />
      <span className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
        Add links (GitHub, LinkedIn, FaceBook, etc.)
      </span>
      <GenericInput
        type={"text"}
        name={"link text"}
        value={newLink.text}
        onChange={(e) =>
          setNewLink((prev) => ({ ...prev, text: e.target.value }))
        }
        placeholder="text"
        isRequired={false}
        containerStyle={"w-5/12  inline-block "}
        labelStyle={"text-primary-color"}
      />
      <GenericInput
        type={"link"}
        name={"link address"}
        labelStyle={"text-primary-color"}
        value={newLink.href}
        onChange={(e) => {
          setNewLink((prev) => ({ ...prev, href: e.target.value }));
        }}
        placeholder="Link"
        isRequired={false}
        containerStyle={"w-5/12 inline-block float-right  "}
      />
      <button
        type="button"
        onClick={addLink}
        className="text-[#FF4E00]   h-10 mt-[-10px]  mb-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Add link
      </button>
      <ul className="mb-4">
        {userData?.links?.map((link, i) => (
          <li key={i}>
            <span>text : {link.text}</span>
            <span> | link : {link.href}</span>
            <button
              type="button"
              onClick={() => removeLink(i)}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none ml-6 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <GenericInput
        type={"file"}
        name={"Upload a profile photo (Recommended!)"}
        accept={"image/*"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, photo: e.target.files[0] }))
        }
        isRequired={false}
        fullLabelStyle={
          "block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        }
        fullInputStyle={
          "block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        }
      />
      {signUpError && <p className="text-red-500 my-5">{signUpError}</p>}
      <button
        type="submit"
        className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </form>
  );
}
