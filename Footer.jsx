import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        <h6>Copyright @ {currYear}</h6>
      </p>
    </footer>
  );
}

export default Footer;
