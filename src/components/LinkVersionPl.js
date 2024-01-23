import React from "react";
import { Link } from "react-router-dom";
import { PL } from "country-flag-icons/react/3x2";

const LinkVersionPl = () => {
  return (
    <div>     
      <Link to="/Polish">
        <PL className="flags"/>
      </Link>
    </div>
  );
};

export default LinkVersionPl;
