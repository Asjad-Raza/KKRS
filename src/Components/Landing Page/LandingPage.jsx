import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Homepage from "../HomePage/Homepage";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Training from "../Training/Training";
import Gallery from "../Gallery/Gallery";
import Guarding from "../Services/Guarding";
import Services from "../Services/Services";
import LabourSupply from "../Services/LabourSupply";
import Payroll from "../Services/Payroll";
import Housekeeping from "../Services/Housekeeping";
import FB from "../Services/FB";
import UtilityStaff from "../Services/UtilityStaff";
import OfficeAssistant from "../Services/OfficeAssistant";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Routes>
        <Route path="/" Component={Header}>
          <Route index Component={Homepage} />
          <Route path="/About" Component={About} />
          <Route path="/Services" Component={Services} />
          <Route path="/clients" Component={Clients} />
          <Route path="/Training" Component={Training} />
          <Route path="/Gallery" Component={Gallery} />
          <Route path="/Guarding" Component={Guarding} />
          <Route path="/LabourSupply" Component={LabourSupply} />
          <Route path="/PayrollManagement" Component={Payroll} />
          <Route path="/Housekeeping" Component={Housekeeping} />
          <Route path="/F&B" Component={FB} />
          <Route path="/UtilityStaff" Component={UtilityStaff} />
        <Route path="/OfficeAssistant" Component={OfficeAssistant}/>
        </Route>
      </Routes>
    </div>
  );
}
