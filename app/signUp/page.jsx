"use client";

import { useEffect, useRef, useState } from "react";
import GenericInput from "../../components/ui/GenericInput";
import { sendSignUpData } from "../../functions/frontendFunctions/apiCalls";

export const metaData = {
  title: "Sign Up",
};

export default function SignUp() {
  const [newLink, setNewLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
  const nameRef = useRef();
  useEffect(() => nameRef.current.focus(), []);

  useEffect(() => {
    if (errorMessage) alert(errorMessage);
  }, [errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password.trim().length < 6) {
      setErrorMessage("Password must contain at least 6 characters.");
      return;
    }
    if (!(userData.password === userData.confirmPassword)) {
      setErrorMessage("Passwords do not match");
      return;
    }
    const inputFields = [
      "name",
      "occupation",
      "about",
      "email",
      "confirmPassword",
      "portfolioLink",
    ];
    for (const fieldName of inputFields) {
      if (userData[fieldName].length < 3) {
        setErrorMessage(
          `${fieldName} field must contain at least 3 characters.`
        );
        return;
      }
    }
    sendSignUpData(userData);
  };

  const addLink = () => {
    if (!newLink.trim() || !(userData.links.length < 3)) return;
    setUserData((prev) => ({
      ...prev,
      links: [...prev.links, newLink],
    }));
    setNewLink("");
  };

  const removeLink = (index) => {
    const updatedLinks = userData.links;
    updatedLinks.splice(index, 1);
    setUserData((prev) => ({ ...prev, links: updatedLinks }));
  };
  return (
    <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
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
        placeholder={"About me"}
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
        isRequired={true}
        placeholder={"Portfolio link"}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, portfolioLink: e.target.value }))
        }
      />
      <GenericInput
        type={"text"}
        name={"Add links (GitHub, LinkedIn, FaceBook, etc.)"}
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
        placeholder="Link"
      />
      <button
        type="button"
        onClick={addLink}
        className="text-[#FF4E00] h-10 mt-[-10px] mb-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Add link
      </button>
      <ul className="mb-4">
        {userData?.links?.map((link, i) => (
          <li key={i}>
            {link}
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
      <button
        type="submit"
        className="text-white bg-[#FF4E00] hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </form>
  );
}
