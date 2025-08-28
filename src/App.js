import React, { useEffect, useState } from "react";
import { getRoute } from "./router";
import Home from "./pages/Home";
import BakeryPage from "./pages/BakeryPage";
import StorePage from "./pages/StorePage";
import AdminPage from "./pages/AdminPage";


export default function App() {
const [route, setRoute] = useState(getRoute());
useEffect(() => {
const onHash = () => setRoute(getRoute());
window.addEventListener("hashchange", onHash);
onHash();
return () => window.removeEventListener("hashchange", onHash);
}, []);


if (route === "/bakery") return <BakeryPage />;
if (route === "/store") return <StorePage />;
if (route === "/admin") return <AdminPage />;
return <Home />;
}