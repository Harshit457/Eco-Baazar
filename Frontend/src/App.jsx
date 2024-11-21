import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(()=> import("./Pages/Home"))
const About = React.lazy(()=> import("./Pages/About"))
const Community = React.lazy(()=> import("./Pages/Community"))
const Contact = React.lazy(()=> import("./Pages/Contact"))
const Login = React.lazy(()=> import("./Pages/Login"))
const Payment = React.lazy(()=> import("./Pages/Payment"))
const Privacy = React.lazy(()=> import("./Pages/Privacy"))
const Product = React.lazy(()=> import("./Pages/Product"))
const Search = React.lazy(()=> import("./Pages/Search"))
const ShopPage = React.lazy(()=> import("./Pages/ShopPage"))

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading.....</div>}></Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Community" element= {<Community></Community>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route path="/Privacy" element={<Privacy></Privacy>}></Route>
          <Route path="/Product" element={<Product></Product>}></Route>
          <Route path="/Search" element={<Search></Search>}></Route>
          <Route path="/Shoppage" element={<ShopPage></ShopPage>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
