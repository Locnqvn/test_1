import React from 'react';
import 'antd/dist/antd.css';
import AppRouter from './Routes/AppRouter';
import './resources/common.css';
import { CookiesProvider } from "react-cookie";
function App(){
   
      return (
         <CookiesProvider>
            <AppRouter/>
         </CookiesProvider>
      )
   }

export default App;