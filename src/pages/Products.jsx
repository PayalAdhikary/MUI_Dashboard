import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccordionDash from "../components/AccordianDash";
import BarChart from "../charts/BarChart";
import CountUp from 'react-countup';
import ProductList from "./ProductList";
export default function Products() {
  return (
    <>
    <div className="bgcolor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>

      <Sidenav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      <ProductList/>  
      </Box>
      </Box>
        
    </div>
      
    </>
  );
}
