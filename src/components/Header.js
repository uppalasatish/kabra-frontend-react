import React, { useState } from "react";
import {AppBar,Tab,Tabs,Toolbar, Typography,Button} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import {setcart} from '../Action';
const Header = ({cart_data})=>{

    const [value,setValue]= useState();
    return(
        <div>
            <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
                <Toolbar>
                    <NavLink to="/" style={{color:'white'}}>
                        <Typography>
                            <BookIcon/> Book Store
                        </Typography>
                    </NavLink>
                    <Tabs sx={{ml:'auto'}} textColor="inherit" indicatorColor="secondary" value={value}  onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
                        <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                        <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
                        <Button LinkComponent={NavLink} to="/cart" variant="contained">
                           My Cart {cart_data.length}
                        </Button>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
};
const mapSatateToProps = (state) =>({
    cart_data:state.cartreducer
})
export default connect(mapSatateToProps)(Header);