import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFilter } from "../context/FilterDialogboxContext";
import { useLang } from "../context/LangDialogueboxContext";
import { useSearchbarDialogueBox } from "../context/Searchbar";

const GItData = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [createdFrom, setCreatedFrom] = useState("");
  const [createdTo, setCreatedTo] = useState("");
  const [updatedFrom, setUpdatedFrom] = useState("");
  const [updatedTo, setUpdatedTo] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const { openFilter, closeFilter, isFilterOpen } = useFilter();
  const { openLang, closeLang, isLangOpen } = useLang();
  const {openSearchbar, closeSearchbar, isSearchbarOpen} = useSearchbarDialogueBox();

  const handleSearchbar = (e)=>{
    if(e.target.id === 'dialog-searchbar') closeSearchbar();
  }


  const handlefilterbox = (e) => {
    if (e.target.id === "dialog-overlay") closeFilter();
  };

  const handlelangbox = (e) => {
    if (e.target.id === "dialog-overlay-lang") closeLang();
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
          <h4 className="heading-git">Search Projects</h4>
          <h5 className="subititle-git">Deep and Die with Github</h5>
          <div onClick={openSearchbar} className="git-click-contain">
            <span>Search</span>
            <i className="bx bx-search"></i>
          </div>
      <div className="git-f-button-contain">
        <button onClick={openFilter} type="button" className="filter-click">
          <i className="bx bx-filter filter-icon"></i>
          <span className="filter-click-text">Filter</span>
        </button>
        <button onClick={openLang} type="button" className="filter-click">
          <i className="bx bx-globe filter-icon"></i>
          <span className="filter-click-text">Language</span>
        </button>
      </div>
        </div>
      </div>


      {isFilterOpen && (
        <div onClick={handlefilterbox} id="dialog-overlay">
          <div className="dialog-box">
            <div className="git-filter-group">
              <div className="g-lb-rec">
                <label>Created From: </label>
                <input
                  type="date"
                  onChange={(e) => setCreatedFrom(e.target.value)}
                />
              </div>
              <div className="g-lb-rec">
                <label>Created To: </label>
                <input
                  type="date"
                  onChange={(e) => setCreatedTo(e.target.value)}
                />
              </div>
              <div className="g-lb-rec">
                <label>Updated From: </label>
                <input
                  type="date"
                  onChange={(e) => setUpdatedFrom(e.target.value)}
                />
              </div>
              <div className="g-lb-rec">
                <label>Updated To: </label>
                <input
                  type="date"
                  onChange={(e) => setUpdatedTo(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isLangOpen && (
        <div onClick={handlelangbox} id="dialog-overlay-lang">
          <div className="dialog-box">
            <div className="lang-button-group">
              <button
                onClick={() => setSelectedLanguage("")}
                className={
                  selectedLanguage === "" ? "lang-btn active" : "lang-btn"
                }
              >
                All
              </button>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={
                    selectedLanguage === lang ? "lang-btn active" : "lang-btn"
                  }
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}


      {
        isSearchbarOpen && (
          <div onClick={handleSearchbar} id="dialog-searchbar">
            <div className="search-dialog-box">
              <h4 className="searchbar-heading">
                Track. Commit. Conquer.
              </h4>
              <div className="searchbar-subtitle">
                search your thought
              </div>
              <input type="text" value={searchTerm} className="searchbar" lang="en" placeholder="search" onChange={(e)=>setSearchTerm(e.target.value)} />
            </div>
          </div>
        )
      }



      {/* <div className="git-card-container">
        <div className="git-card-contain">
          {filteredRepos.map((repo) => (
            <div
              onClick={() => window.open(repo.html_url, "_blank")}
              className="git-card"
            >
              <div className="git-uni-contain">
                <div className="git-uni-overlay">
                  <i className="bx bxs-flask"></i>
                </div>
                <div className="git-card-title">{repo.name}</div>
              </div>
              <div className="git-subtitle-card">
                {repo.language || "Unknown"}
              </div>

              <div className="git-owner-container">
                  <img src={repo.owner.avatar_url} alt="owner" className="owner-logo" />                
                  <h4 className="owner-name">Sandeep Kumar</h4>
              </div>
              
              <p className="git-text-c-a">
                <span className="git-card-date">Created on:</span>
                <span className="git-card-date-text">
                  {new Date(repo.created_at).toLocaleDateString()}
                </span>
              </p>
              <p className="git-text-c-a">
                <span className="git-card-date">Last Update:</span>
                <span className="git-card-date-text">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default GItData;
