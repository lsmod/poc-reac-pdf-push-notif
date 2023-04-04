import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Document from "./components/Document";

const App = () => (
  <div>
    <div>
      <h1>Rendu Html/react</h1>
      <Document />
    </div>
    <div>
      <h1>Rendu PDF</h1>
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <Document />
      </PDFViewer>
    </div>
  </div>
);

export default App;
