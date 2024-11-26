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
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HbarChart from "../charts/HbarChart";
import CountUp from 'react-countup';

export default function Analytics() {
  return (
    <>
    <div className="bgcolor">
    <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Card sx={{ height: 50 + "vh",maxWidth:650 + "px" }}  >
                <CardContent>
              <Stack direction="row" spacing={2}>
                <Card sx={{ minWidth: 40 + "vh", height: 150}}  className="grad">
                  <CardContent >
                    <div className="iconstyle1">
                      Visitors
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                      <CountUp delay={0.2} end={22000} duration={0.3}/>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Since Last Week
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 40 + "vh", height: 150 }} className="gradLight">
                <CardContent >
                    <div className="iconstyle1">
                      Visitors
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.2} end={22000} duration={0.3}/>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Since Last Week
                    </Typography>
                  </CardContent>
                </Card>
                
              </Stack>

              <Stack direction="row" spacing={2} mt={2}>
                <Card sx={{ minWidth: 40 + "vh", height: 150}}  className="grad">
                <CardContent >
                    <div className="iconstyle1">
                      Visitors
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.2} end={22000} duration={0.3}/>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Since Last Week
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ minWidth: 40 + "vh", height: 150 }} className="gradLight">
                <CardContent >
                    <div className="iconstyle1">
                      Visitors
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                    <CountUp delay={0.2} end={32000} duration={0.3}/>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Since Last Week
                    </Typography>
                  </CardContent>
                </Card>
                
              </Stack>
          </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
            <Card sx={{ height: 50 + "vh",maxWidth:1200 + "px"}}>
                <CardContent>
                  <HbarChart/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 50 + "vh" }}>
                <CardContent>
                    <GeoChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 50 + "vh" }}>
                <CardContent>
                <PieChart/>
                 
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
