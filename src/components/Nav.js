import React from "react";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h3 className="up-next" onClick={() => setLibraryStatus(true)}>
        Up Next
      </h3>
    </nav>
  );
};

export default Nav;
