import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
import { cardData } from "../../../storeData/cardData";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function UserManagementHome() {
  return (
    <>
      <div className="row home-page">
        <h3>Applications </h3>
        <br />
        <p> Please select applications</p>
        <br />       
      
          <div className="card-item">
          {cardData.map((item) => {
            return (
              <>
              <div className="item">
              <Link to={item.path} style={{textDecoration:'none', color: '#20b2aa'}}>
                <Card sx={{width: 250, height: 150,bgcolor:'lightblue'}}>                  
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>                  
                </Card>
                </Link>
                </div>
              </>
            );
          })}
          </div>      
        
      </div>
    </>
  );
}
