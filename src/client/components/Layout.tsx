import React from "react";

type OwnProps = {
  children: React.ReactNode;
};

export const Layout: React.VFC<OwnProps> = ({ children }) => {
  return <div className="w-full h-full bg-cyan-900">{children}</div>;
};
