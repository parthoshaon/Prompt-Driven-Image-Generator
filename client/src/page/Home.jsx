import React, { useEffect, useState } from "react";

import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto bg-white rounded-lg shadow-md py-12 px-8 lg:px-16">
      <div className="text-center mb-16">
        <h1 className="font-extrabold text-[#222328] text-5xl md:text-6xl leading-tight mb-6">
          Pixelate
        </h1>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-500 text-base md:text-lg mb-4">
            Transform Your Text into Stunning Images
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Effortless Image Generation with AI Technology
          </h2>
        </div>
      </div>

      <div className="relative mb-10">
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          value={searchText}
          onChange={handleSearchChange}
          className="block w-full py-2 pl-8 pr-3 text-lg text-gray-800 placeholder-gray-500 bg-gray-100 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l-5-5 5-5"
            ></path>
          </svg>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {searchText && (
            <h2 className="font-medium text-gray-600 text-xl mb-4">
              Showing results for{" "}
              <span className="font-semibold">{searchText}</span>:
            </h2>
          )}
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6">
            {searchText ? (
              <RenderCards
                data={searchedResults}
                title="No search results found"
              />
            ) : (
              <RenderCards data={allPosts} title="No posts yet" />
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
