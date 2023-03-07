import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import UserInput from "../Input/Input";

const Pages = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserInput />}/>
                    <Route path="/Home" element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Pages;