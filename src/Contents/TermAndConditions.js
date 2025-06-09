import React from 'react'
import { Alias, HeadingTerms, TermsandConditons } from '../Json/TermAndConditions';

const TermAndConditions = () => {
  return (
    <div>
      <div className="t-container">
        <div className="t-up-contain">
            <h3 className="heading-t-c">{HeadingTerms[0].title}</h3>
            <p className="descriptions-t-up-t">{HeadingTerms[0].description}</p>
        </div>
        <div className="t-up-contain">
            <div className="heading-t-c">{Alias[0].title}</div>
            <p className="descriptions-t-up-t">{Alias[0].description}</p>
            <ul className="al-contents">
                <li className="al-items">{Alias[0].alies}</li>
                <li className="al-items">{Alias[0].alies1}</li>
            </ul>
        </div>
        <div className="t-main-content">
            {
                TermsandConditons.map((e, i)=>(
                    <div key={i} className="term-main-content">
                        <h4 className="title-t-content">{e.title}</h4>
                        <p className="text-t-content">{e.description}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TermAndConditions;
