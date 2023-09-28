"use client";
import GenericInput from "../../../components/ui/GenericInput";
import { useEffect, useState } from "react";

function AddProject() {
  const [isPortfolio, setIsPortfolio] = useState(false);
  const handleSubmit = () => {
    e.preventDefault();
  };

  const [technologies, setTechnologies] = useState([]);
  const [newTechnology, setNewTechnology] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  useEffect(() => console.log(selectedPhoto), [selectedPhoto]);
  const addTechnology = () => {
    if (!(newTechnology && technologies.length < 3)) return;
    setTechnologies([...technologies, newTechnology]);
    setNewTechnology("");
  };

  const removeTechnology = (index) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies.splice(index, 1);
    setTechnologies(updatedTechnologies);
  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-5/6 lg:w-96 mx-auto py-20">
        <h1 className="font-bold text-3xl mb-6">Add new project</h1>
        <GenericInput
          name={"Project name"}
          required={true}
          type={"text"}
          placeholder={"What is the project name?"}
        />
        <GenericInput
          type={"text"}
          name={"Description"}
          required={true}
          placeholder={"Describe the project"}
        />
        <GenericInput
          name={"GitHub link"}
          required={false}
          type={"text"}
          placeholder={"What is the GitHub link?"}
        />
        <GenericInput
          name={"Website link"}
          required={false}
          type={"text"}
          placeholder={"What is the website link?"}
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
          {technologies.map((tech, i) => (
            <li key={i}>
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
          onChange={handlePhotoChange}
          required={false}
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
          />{" "}
        </div>
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
