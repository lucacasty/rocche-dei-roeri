import { useState } from "react";


export default function useAgeVerification(){


const [verified,setVerified] = useState(
  sesstionStorage.getItem("ageVerified") === "true"
);



const confirmAge = () => {

  sesstionStorage.setItem(
    "ageVerified",
    "true"
  );

  setVerified(true);

};



const resetAge = () => {

  sesstionStorage.removeItem(
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