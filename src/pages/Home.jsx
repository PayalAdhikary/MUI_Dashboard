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

export default function Home() {
  return (
    <>
    <div className="bgcolor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ minWidth: 49 + "vh", height: 150}}  className="grad">
                  <CardContent >
                    <div>
                      <CreditCardIcon className="iconstyle"/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                      $500.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 49 + "vh", height: 150 }} className="gradLight">
                  <CardContent >
                    <div>
                      <BusinessCenterIcon className="iconstyle"/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                      $900.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="column" spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradLight">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <StorefrontIcon className="iconstyle" />
                    </div>
                    <div className="paddingAll">
                      <span className="priceTitle">$203K</span>
                      <br />
                      <span className="priceSubTitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row">
                    <div className="iconstyleblack">
                      <StorefrontIcon className="iconstyleblack" />
                    </div>
                    <div className="paddingAll">
                      <span className="priceTitle">$203K</span>
                      <br />
                      <span className="priceSubTitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                <div className="paddingAll">
                      <span className="priceTitle">Popular Products</span>
                      <br />
                    
                    </div>
                  <AccordionDash />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
      
    </>
  );
}
