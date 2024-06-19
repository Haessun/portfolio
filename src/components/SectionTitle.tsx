import React from "react";

import Divider from "./Divider";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h3>{children}.</h3>
      <Divider />
    </>
  );
};

export default SectionTitle;
