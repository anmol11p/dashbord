import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
    const Navigate=useNavigate()
  return (
    <div className="container error-container">
        <section className="section-error flex">
      <h2 className="header-404"> 404 </h2>
      <span>Sorry Page not Found</span>
      <span className="btn-common flex">
        <button onClick={()=>Navigate("/")}>return home</button>
        <button className="IInd-btn" onClick={()=>Navigate("/contact")}> report problem</button>
      </span>
        </section>
    </div>
  );
};

export default ErrorElement;
