import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode; // Define children as a prop to accept child components
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {/* Render the child components inside the Layout */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
