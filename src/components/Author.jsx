import React from "react";

function Author() {
  return (
    <marquee
      behavior="scroll"
      direction=""
      style={{
        marginTop: "100px",
        backgroundColor: "whiteSmoke",
        color: "black",
      }}
    >
      Second React Project Made with 💻 by
      <a href="https://www.github.com/mkhalilhaider" target="_blank">
        Muhammad Khalil Haider
      </a>
    </marquee>
  );
}

export default Author;
