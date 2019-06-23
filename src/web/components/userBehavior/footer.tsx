import * as React from "react";

const Footer = ({ active, total }) => {
  return (
    <div>
      {active} / {total}
    </div>
  );
};

export default Footer;
