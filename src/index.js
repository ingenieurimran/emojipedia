import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import EmojipediaFilter from "./components/FilterMap";


const contanier = document.getElementById('root');
const root = createRoot(contanier);
root.render(
  <di>
    {/* <App /> */}
    {<EmojipediaFilter />}

  </di>
)




