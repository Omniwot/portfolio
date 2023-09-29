import React, { useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import MatrixRain from "./matrix";

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? <Redirect to="/home" /> : <MatrixRain />;
}

export default Splash;
