import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Stok from "../pages/Stok";
import Detail from "../pages/Detail";
import Confirm from "../pages/Confirm"

function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Stok/>} />
                <Route path="/detail/:name" element={<Detail/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;