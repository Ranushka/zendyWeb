import React from "react";
import { Space } from "components/atoms";

const WhatWeOffer: React.FC<{}> = ({}) => {
  return (
    <div>
      <h3>What we offer</h3>
      <Space size={2} />
      <ul>
        <li>
          <strong className="color__success">✓ </strong>
          <span className="px__2">Full text scientific publications</span>
        </li>
        <li>
          <strong className="color__success">✓ </strong>
          <span className="px__2">250+ Commercial magazines</span>
        </li>
        <li>
          <strong className="color__success">✓ </strong>
          <span className="px__2">No downloading restrictions</span>
        </li>
        <li>
          <strong className="color__success">✓ </strong>
          <span className="px__2">All major disciplines</span>
        </li>
        <li>
          <strong className="color__success">✓ </strong>
          <span className="px__2">Manage and export citations</span>
        </li>
        <li>
          <strong className="color__success">✓ </strong>
          <span className="px__2">Access to wide rage of subjects</span>
        </li>
      </ul>
    </div>
  );
};

export default WhatWeOffer;
