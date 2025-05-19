import React from 'react'
import AlertMessage from '../Contents/AlertMessage';

const MoreInfo = () => {
  const AlertData = [
    {
      heading: "Privacy Notice & Legal Assurance",
      description:
        "Your information is securely handled with utmost confidentiality. By submitting, you agree to our privacy terms, ensuring lawful use and protection of your personal data with integrity and respect.",
    },
  ];
  return (
    <div>
      <AlertMessage heading={AlertData[]}/>
    </div>
  )
}

export default MoreInfo;
