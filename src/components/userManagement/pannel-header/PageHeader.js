import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './pannal.css';


export default function PageHeader(props) {
  const {title,backButtonName,path}=props;

  const styled={
    alignItem:'left',
    justifyContent:'left',
    display:'flex',
    color:'blue',
    textDecoration:'none'
  }

  return (
    <div className='pageHeader'>
       {
        path ? (
         <Link to={path}  style={styled}>
            <ArrowBackIosIcon fontSize='30px'/> <label>{backButtonName}</label>
         </Link>
        ) :null}
        <br/>
      <strong>{title}</strong>
     </div>
  );
}