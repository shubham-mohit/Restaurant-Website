import React from 'react'
import Containt from '../components/Layout/Containt'
import { Box, Typography } from '@mui/material'
import '../../src/styles/home.css'
import { red } from '@mui/material/colors'

const About = () => {
  return (
    <Containt>
       <Box sx={{mr:2 , my:5 , ml:2 , fontSize: 18 , textAlign:'center'}}>
        <Typography variant='h4' textAlign={'center'} padding={3} margin={2} >
          <h4 style={{color:'red'}}> Welcome to Sadguru Snacks center </h4>
        </Typography>
        <p>
          Welcome to the best, healthy, hygenic and tasty food center. We are providing you the best and good quality of food. We are not compramise with your health.
          </p> 
          <br/>
          <p>
          My family style dinners will be the best in my area since it aims at large platters of food, conversation and sharing good company. With Sunday roasts, excessive spreads, Italian-norm courses or side dishes to be shared give reason to be at table and concentrate on collective appreciation. The attitude of’ help yourself’ will promote second helpings that will make it informal and special. The congenial practice of reservation will be encouraged on Sundays for feasts purposes.
          My menu will be reflecting my restaurant’s character and making my restaurant’s theme inherent in its design elements. With a pink color that reflects my restaurant and my food passion, I will design a less complicated clean layout that will ease browsing of the menu. It will be subdivided into breakfast, lunch and dinner. Where western omlettes, poachers, breakfast burritos, cream cheese French toast and hot breakfast sandwiches will be in the breakfast section (first page). The likes of wraps and ‘from grill’ will be in lunch and dinner respectively.
          </p>
          <br/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae convallis nibh, in bibendum erat. Phasellus ut libero at justo scelerisque iaculis. Integer quis cursus orci. Nam quis velit eget nisl consectetur ultrices. Vivamus volutpat feugiat sapien, quis posuere quam ultricies in. Duis vestibulum nisi id odio fermentum tincidunt. Praesent dapibus pharetra velit sit amet laoreet. Nunc eu nulla in tellus venenatis accumsan. Nulla facilisi. Integer fermentum ligula auctor sapien suscipit, vel iaculis ligula dictum. Vivamus sed vestibulum dui, id mattis ligula. Fusce ut elit ac lectus facilisis facilisis.
          </p>
       </Box>
    </Containt>
  )
}

export default About