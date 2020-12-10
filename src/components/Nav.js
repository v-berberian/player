import React from "react";
import NightsStayIcon from '@material-ui/icons/NightsStay';

const Nav = ({ libraryStatus, setLibraryStatus, darkMode, setDarkMode }) => {
  console.log(darkMode)
  return (
    <nav>
      <div className="dark-mode">
      <NightsStayIcon onClick={()=> setDarkMode(!darkMode) } />
      </div>
      <h3 className="up-next" onClick={() => setLibraryStatus(true)}>
        Up Next
      </h3>
    </nav>
  );
};

export default Nav;
