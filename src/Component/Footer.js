import React from "react";

const headerStyle = {
  backgroundColor: "#563d7c"
};

function Footer() {
  return (
    <React.Fragment>
      <footer style={headerStyle} className="fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5"></div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
