import React from 'react'
import Containt from '../components/Layout/Containt'
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'
import {Menul} from '../data'

const Menu = () => {
  return (
    <Containt>
       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Menul.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"} textAlign={'center'}>
                  {menu.name}
                </Typography>
                <Typography variant="body2" textAlign={'center'}>{menu.info}</Typography>
                <Typography variant='h5' textAlign={'center'}> {menu.price} </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

       
    </Containt>
  )
}

export default Menu