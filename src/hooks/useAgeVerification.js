import { useState } from "react";


export default function useAgeVerification(){


const [verified,setVerified] = useState(
  localStorage.getItem("ageVerified") === "true"
);



const confirmAge = () => {

  localStorage.setItem(
    "ageVerified",
    "true"
  );

  setVerified(true);

};



const resetAge = () => {

  localStorage.removeItem(
    "ageVerified"
  );

  setVerified(false);

};



return {

  verified,
  confirmAge,
  resetAge

};


}