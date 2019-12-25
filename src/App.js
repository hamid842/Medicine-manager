import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MedicationInput from "./components/MedicationInput";
import MedicationList from "./components/MedicationList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">medication input</h3>
          <MedicationInput />
          <MedicationList />
        </div>
      </div>
    </div>
  );
}

export default App;
