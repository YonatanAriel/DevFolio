"use client";
import GenericInput from "../../../components/ui/genericInput";
import { useContext, useEffect, useRef, useState } from "react";
import { addProject } from "../../../functions/frontendFunctions/apiCalls";
import { MainContext } from "../../../context/mainContext";
import Popup from "../../../components/ui/popup";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../../components/ui/loadingSpinner";

function AddProject() {
  const router = useRouter();
  const popupTxt = "congratulations! Your project has been successfully added";
  const [newTechnology, setNewTechnology] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    gitHubLink: "",
    websiteLink: "",
    photo: "",
    technologies: [],
    isPortfolio: false,
  });
  const nameRef = useRef();
  const { token } = useContext(MainContext);

  useEffect(() => nameRef.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) return;
    if (!formData.photo) {
      alert("Photo is required");
      return;
    }
    if (
      formData.name.trim().length < 3 ||
      formData.description.trim().length < 3
    ) {
      alert("Project name and description must contain at least 3 letters");
      return;
    }
    setShowLoadingSpinner(true);
    setErrorMsg("");
    addProject(formData, token).then((res) =>
      res === "success" ? handleSuccess() : handleError()
    );
  };

  const handleSuccess = () => {
    setShowLoadingSpinner(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      router.back();
    }, 3000);
  };

  const handleError = () => {
    setShowLoadingSpinner(false);
    setErrorMsg("An error occurred. Please try again");
  };

  const addTechnology = () => {
    if (!newTechnology.trim() || !(formData.technologies.length < 3)) return;
    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, newTechnology],
    }));
    setNewTechnology("");
  };

  const removeTechnology = (index) => {
    const updatedTechnologies = formData.technologies;
    updatedTechnologies.splice(index, 1);
    setFormData((prev) => ({ ...prev, technologies: updatedTechnologies }));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-5/6 py-20 mx-auto lg:w-96">
        <h1 className="mb-6 text-3xl font-bold">Add a new project</h1>
        <GenericInput
          ref={nameRef}
          name={"Project name"}
          isRequired={true}
          type={"text"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder={"What is the project name?"}
        />
        <GenericInput
          type={"text"}
          name={"Description"}
          isRequired={true}
          placeholder={"Describe the project"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <GenericInput
          name={"GitHub link"}
          isRequired={false}
          type={"text"}
          placeholder={"What is the GitHub link?"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, gitHubLink: e.target.value }))
          }
        />
        <GenericInput
          name={"Website link"}
          isRequired={false}
          type={"text"}
          placeholder={"What is the website link?"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, websiteLink: e.target.value }))
          }
        />
        <GenericInput
          type={"text"}
          name={"Technologies you used in the project"}
          value={newTechnology}
          onChange={(e) => setNewTechnology(e.target.value)}
          placeholder="Technology name"
        />
        <button
          type="button"
          onClick={addTechnology}
          className="text-[#FF4E00] h-10 mt-[-10px] mb-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Add Technology
        </button>
        <ul className="mb-4">
          {formData?.technologies?.map((tech, i) => (
            <li key={`${tech}${i}`}>
              {tech}
              <button
                type="button"
                onClick={() => removeTechnology(i)}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none ml-6 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <GenericInput
          type={"file"}
          name={"Upload a photo of the project (Recommended!)"}
          accept={"image/*"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, photo: e.target.files[0] }))
          }
          isRequired={false}
          fullLabelStyle={
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white "
          }
          fullInputStyle={
            "block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          }
        />
        <h3>Is this a Portfolio?</h3>
        <div className="flex gap-5">
          <GenericInput
            name={"No"}
            checked={!formData.isPortfolio}
            onChange={() =>
              setFormData((prev) => ({ ...prev, isPortfolio: false }))
            }
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
            checked={formData.isPortfolio}
            onChange={() =>
              setFormData((prev) => ({ ...prev, isPortfolio: true }))
            }
            type={"radio"}
            containerStyle={"flex items-center mb-4"}
            fullInputStyle={
              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            }
            fullLabelStyle={
              "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            }
            labelLocation={"last"}
          />{" "}
        </div>
        {errorMsg && (
          <span className="block w-full mb-4 text-center text-red-500">
            {errorMsg}
          </span>
        )}

        <button
          type="submit"
          className="block text-white bg-[#FF4E00]  hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add project
        </button>
      </form>
      {showPopup && <Popup text={popupTxt} />}
      {showLoadingSpinner && <LoadingSpinner />}
    </>
  );
}

export default AddProject;
