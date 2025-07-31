import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const Title = () => (
  <h1>Jxs in not html in js</h1>
)

// React component

export const HeadingComponent = () => {
  return <div>
    {Title()}
    <h1>Functional component</h1>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
