import { FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () =>{
    const history = useNavigate();
    const[inputs,setInputs] = useState({
        name:'',
        description:'',
        image:'',
        unitprice:'',
        qty:1
    });
    const {name,description,image,unitprice,qty} = inputs;

    const handleChange = (e) =>{
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };

    const sendRequest = async()=>{
        await axios.post("http://localhost:5000/books",{
            name:String(name),
            description:String(description),
            image:String(image),
            unitprice:Number(unitprice),
            qty:Number(qty)
        }).then(res => res.data);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        if(!name || !description || !image || !unitprice){
            alert ("Please fill all the fields");
        }
        sendRequest().then(()=>history('/books'));
    };

    return(
        <form onSubmit={handleSubmit}>
            <Box display="flex" 
                flexDirection="column" 
                justifyContent={'center'} 
                maxWidth={700} 
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight="auto"
                marginTop={10}
                >
                <FormLabel>Book Name</FormLabel>
                <TextField value={name} onChange={handleChange} margin="normal" placeholder="Harry Poter" fullWidth variant="outlined" name="name"/>
                <FormLabel>Book Description / Author</FormLabel>
                <TextField value={description} onChange={handleChange} margin="normal" placeholder="Written By Charles Hawak" fullWidth variant="outlined" name="description"/>
                <FormLabel>Book Price/ Unit in Rs.</FormLabel>
                <TextField value={unitprice} onChange={handleChange} type="number" margin="normal" placeholder="500" fullWidth variant="outlined" name="unitprice"/>
                <FormLabel>Book Img Url</FormLabel>
                <TextField value={image} onChange={handleChange} margin="normal" placeholder="https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg" fullWidth variant="outlined" name="image"/>
                <Button type="submit" variant="contained">Add Book</Button>
            </Box>
        </form>
    )
}

export default AddBook;