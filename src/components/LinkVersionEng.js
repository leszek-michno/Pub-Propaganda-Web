import { GB } from "country-flag-icons/react/3x2";
import React from "react";
import { Link } from "react-router-dom";

const LinkVersionEng = () => {
  return (
    <div>
      <Link to="/English">
        <GB className="flags" />
      </Link>
    </div>
  );
};

export default LinkVersionEng;
