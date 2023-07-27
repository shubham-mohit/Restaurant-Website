import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography , Grid, IconButton, Drawer } from '@mui/material'
// import { black } from '@mui/material/colors'
import {Link} from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import '../../styles/Titlestyle.css'
import ListIcon from '@mui/icons-material/List';

const Title = () => {
    // const [small , setSmall] = useState(false)

    // const handleclick = (()=>{
    //     setSmall(!small)
    // })

    const drawer = (
        <Box  sx={{ textAlign: "center" }} >
            <Typography variant="h6">
            <Box sx= {{display:{xs:'block', sm: 'none'}}}>
                <ul className='navbar'>
                    <li>
                        <Link to={'/'}> Home </Link>
                    </li>
                    <li>
                        <Link to={'/Menu'}> Menu </Link>
                    </li>
                    <li>
                        <Link to={'/about'}> About </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}> Contact </Link>
                    </li>
                </ul>
            </Box>
            </Typography>
        </Box>
    )

  return (
    <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor: "black"}} position='static'>
            <Toolbar>

             <IconButton color= 'inherit' aria-label='open drawer' edge= 'start' sx={{
                mr: 2,
                display: { sm: "none" },
                // onClick: {handleclick}
              }} >
                <ListIcon/>
            </IconButton>
                
         <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" color={'yellow'}>
                <RestaurantIcon/>
                  SADGURU SNACKS
            </Typography>
          </Grid>
          <Grid item>
            
            <Typography variant="h6">
            <Box sx= {{display:{xs:'none', sm: 'block'}}}>
                <ul className='navbar'>
                    <li>
                        <Link to={'/'}> Home </Link>
                    </li>
                    <li>
                        <Link to={'/Menu'}> Menu </Link>
                    </li>
                    <li>
                        <Link to={'/about'}> About </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}> Contact </Link>
                    </li>
                </ul>
            </Box>
            </Typography>
          </Grid>
        </Grid>
            </Toolbar>
            </AppBar>
            {/* <Box component='nav'>
                <Drawer variant='temporary' open= {small} onClose={handleclick} sx={{display:{ms:'none'}}} >
                    {drawer}
                </Drawer>
            </Box> */}
        </Box>
    </>
  )
}

export default Title