import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert("Success");
        navigate("/");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-0">
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-extrabold text-gray-900 text-5xl mb-4">
          Unleash Your Creativity
        </h1>
        <p className="text-gray-600 text-xl max-w-lg">
          Use PIXELATE to create stunning and imaginative images and share them
          with the community.
        </p>
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        <form
          className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Ex., Partho Shaon"
              value={form.name}
              handleChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="Create an image of Lionel Messi scoring a winning goal in the final minute of the Champions League final, with his teammates lifting him up in celebration in the background."
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
              className="h-40 resize-none"
            />
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={generateImage}
              className=" text-white bg-green-700 font-medium rounded-md text-lg px-8 py-3 text-center"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>

          <div className="mt-10 text-center">
            {/* <p className="text-gray-600 text-lg">Let the world see your artistic skills - share your image with the PIXELATE community!</p> */}
            <button
              type="submit"
              className="mt-6 text-white bg-purple-600 font-medium rounded-md text-lg px-8 py-3 text-center"
            >
              {loading ? "Sharing..." : "Share with the Community"}
            </button>
          </div>
        </form>
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        <div className="max-w-lg w-full h-96 relative rounded-lg overflow-hidden">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-cover absolute inset-0 z-10"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-full h-full object-cover absolute inset-0 z-10 opacity-50"
            />
          )}

          {generatingImg && (
            <div className="absolute inset-0 z-20 flex justify-center items-center bg-gray-900 bg-opacity-75 rounded-lg">
              <Loader />
            </div>
          )}

          <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600 to-pink-500"></div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
