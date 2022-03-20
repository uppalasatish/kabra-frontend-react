import { Box, Typography } from "@mui/material";
import React from "react";

const About = () =>{
    return(
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography sx={{fontFamily:'fantasy'}} variant="h2">This is the task given by Kabra Solutions</Typography>
            <Typography sx={{fontFamily:'fantasy'}} variant="h3">Moongo DB, Express JS, React JS, Node JS</Typography>
        </Box>
    )
}

export default About;