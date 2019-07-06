import * as React from "react";

const Footer = ({ active, total }:any) => {
  return (
    <div>
      {active} / {total}
    </div>
  );
};

export default Footer;
