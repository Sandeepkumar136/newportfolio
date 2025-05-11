import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFilter } from "../context/FilterDialogboxContext";

const GItData = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [createdFrom, setCreatedFrom] = useState("");
  const [createdTo, setCreatedTo] = useState("");
  const [updatedFrom, setUpdatedFrom] = useState("");
  const [updatedTo, setUpdatedTo] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { openFilter, closeFilter, isFilterOpen } = useFilter();

  const handlefilterbox = (e) => {
    if (e.target.id === "dialog-overlay") closeFilter();
  };

  useEffect(() => {
    fetch("https://api.github.com/users/Sandeepkumar136/repos")
      .then((res) => res.json())
      .then((data) => {
        const publicRepos = data.filter((repo) => !repo.private);
        setRepos(publicRepos);
      })
      .catch((err) => console.error("Fetched Error:", err));
  }, []);

  const filterByDate = (repoDate, from, to) => {
    const date = new Date(repoDate);
    if (from && date < new Date(from)) return false;
    if (to && date > new Date(to)) return false;
    return true;
  };

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCreated = filterByDate(
      repo.created_at,
      createdFrom,
      createdTo
    );
    const matchesUpdated = filterByDate(
      repo.updated_at,
      updatedFrom,
      updatedTo
    );
    const matchesLanguage = selectedLanguage
      ? repo.language === selectedLanguage
      : true;
    return matchesSearch && matchesCreated && matchesUpdated && matchesLanguage;
  });

  const languages = [
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  return (
    <div className="git-container">
      <div className="git-input-contain">
        <div className="git-input-overlay">
          <motion.h4
            className="heading-git"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Search Interesting Projects.
          </motion.h4>
          <motion.h5
            className="subititle-git"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Deep and Die with Github
          </motion.h5>
          <motion.input
            type="text"
            value={searchTerm}
            placeholder="Search Projects"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar-git"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* --- Date and Language Filters --- */}
        </div>
      </div>
      <div className="git-f-button-contain">
      <button onClick={openFilter} type="button" className="filter-click">
        <i className="bx bx-filter filter-icon"></i>
        <span className="filter-click-text">Filter</span>
      </button>
      <button onClick={openFilter} type="button" className="filter-click">
        <i className="bx bx-globe filter-icon"></i>
        <span className="filter-click-text">Language</span>
      </button>
      </div>
      {isFilterOpen && (
        <div onClick={handlefilterbox} id="dialog-overlay">
          <div className="dialog-box">
            <div className="git-filter-group">
              <div className="g-lb-rec">
                <label>
                  Created From:{" "}
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setCreatedFrom(e.target.value)}
                  />
              </div>
              <div className="g-lb-rec">
                <label>
                  Created To:{" "}
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setCreatedTo(e.target.value)}
                  />
              </div>
              <div className="g-lb-rec">
                <label>
                  Updated From:{" "}
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setUpdatedFrom(e.target.value)}
                  />
              </div>
              <div className="g-lb-rec">
                <label>
                  Updated To:{" "}
                  </label>
                  <input
                    type="date"
                    onChange={(e) => setUpdatedTo(e.target.value)}
                  />
              </div>
            </div>
          </div>
        </div>
      )}
            {/* <label>
        Language:
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">All</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </label> */}
      <div className="git-card-contain">
        {filteredRepos.map((repo) => (
          <motion.div
            key={repo.id}
            className="git-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="git-c-title-contain">
              <i className="bx bxs-flask"></i>
              <span className="git-c-title">{repo.name}</span>
            </div>
            <p className="git-subtitle-c">{repo.language || "Unknown"}</p>
            <p className="git-text-c-a">
              <span className="git-span">Created on:</span>
              <span className="git-text-span">
                {new Date(repo.created_at).toLocaleDateString()}
              </span>
            </p>
            <p className="git-text-c-a">
              <span className="git-span">Last Update:</span>
              <span className="git-text-span">
                {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </p>
            <div className="git-link-contain">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-git-c"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GItData;
