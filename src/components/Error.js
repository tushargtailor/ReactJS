import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError()
  console.log(err);
  
  return (
    <div className="error-container">
      <h1>Oops!!!!!!!!!!</h1>
      <h2>Something went Wrong</h2>
      <h3>{err.status}: {err.statusText}</h3>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
