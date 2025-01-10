import React from "react";

export default function DevfolioButton() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <div id="devfolio-button-container">
        <div
          class="apply-button"
          id="devfolio-button"
          data-hackathon-slug="inspiron23"
          data-button-theme="inverted-dark"
          style={{
            height: "44px",
            width: "312px"
          }}
        ></div>
    </div>
  );
}
