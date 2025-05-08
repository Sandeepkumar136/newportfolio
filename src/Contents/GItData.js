import React, { useEffect, useState } from 'react'

const GItData = () => {
    const [repos, setRepos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      fetch('https://api.github.com/users/Sandeepkumar136/repos')
      .then(res=> res.json())
      .then(data => {
        const publicRepos = data.filter(repo => !repo.private);
        setRepos(publicRepos);
      })
      .catch(err => console.error('Fetched Error:', err));
    }, []);

    const filteredRepos = repos.filter(repo=> repo.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
    

  return (
    <div className='git-container'>
      <div className="git-input-contain">
        <div className="git-input-overlay">
        <h4 className="heading-git">Search Interesting Projects.</h4>
        <h5 className="subititle-git">Deep and Die with Github</h5>
        <input type="text" value={searchTerm} placeholder='Search Projects' onChange={(e)=> setSearchTerm(e.target.value)}  className="search-bar-git" />
        </div>
      </div>
      <div className="git-card-contain">
        {
          filteredRepos.map(repo=>(
            <div key={repo.id} className="git-card">
              <div className="git-c-title-contain">
              <i className='bx bxs-flask'></i>
              <span className="git-c-title">{repo.name}</span>
              </div>
              <p className="git-subtitle-c">{repo.language || "Unknown"}</p>
              <p className="git-text-c-a"><span className="git-span">Created on:</span><span className="git-text-span">{new Date(repo.created_at).toLocaleDateString()}</span></p>
              <p className="git-text-c-a"><span className="git-span">Last Update:</span><span className="git-text-span">{new Date(repo.updated_at).toLocaleDateString()}</span></p>
              <div className="git-link-contain"><span className="git-span-b">On GitHub</span><a href={repo.html_url} target='_blank' rel='noopener noreferrer' className="link-git-c"><i className='bx bxl-github' ></i></a></div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default GItData
