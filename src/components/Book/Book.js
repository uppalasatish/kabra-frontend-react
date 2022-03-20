import React from "react";
import axios from 'axios';
import { Button } from "@mui/material";
import "./Book.css";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {setcart} from '../../Action';
import { handleBreakpoints } from "@mui/system";


const Book = (props) =>{
    
    const history = useNavigate();
    const{ _id,name,image,description,qty,unitprice} = props.book;
    const Handler = (id,name,description,qty,unitprice,image) =>{
        props.setcart(id,name,description,qty,unitprice,image);
        alert("Book added to cart");
    }
    const deleteHandler = async() =>{
        await axios.delete(`http://localhost:5000/books/${_id}`)
        .then(res=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/books"));
    }


    return(
        <div className="card" key={_id}>
            <img src={image} alt={image}/>
            <article>{description}</article>
            <h3>{name}</h3>
            <h2>Rs .{unitprice}</h2>
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
            <Button onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
            <Button  sx={{mt:'auto'}} onClick={()=>Handler(_id,name,description,qty,unitprice,image)}>Add Cart</Button>
        </div>
    )
}

const mapSatateToProps = (state) =>({
    cart_data:state.cartreducer
})

const mapDispatchProps = dispatch =>{
    return {
        setcart:(_id,name,description,qty,unitprice,image) => dispatch(setcart(_id,name,description,qty,unitprice,image))
    }
}
export default connect(mapSatateToProps,mapDispatchProps)(Book);