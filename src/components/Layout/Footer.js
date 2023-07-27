import React from 'react'
import Containt from './Containt'
import {Box, Typography} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign: 'center' , color: 'white' , backgroundColor: '#1A1A19',  padding: 1 ,}}>
            <Box sx={{
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}>
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
            </Box>
            <Typography sx={{ '@media(max-width:600px)': {fontSize: '1rem'}}}>
                All rights reserved &copy; SSC 
            </Typography>
        </Box>
    </>
  )
}

export default Footer