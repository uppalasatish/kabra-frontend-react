import { FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Book.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookDetail = (props) =>{
    const history = useNavigate();
    const [inputs,setInputs] = useState({});
    const {name,description,image,unitprice,qty} = inputs;
    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/books/${id}`)
            .then((res)=>res.data).then(data=>setInputs(data.book));
        };
        fetchHandler()
    },[id]);

    const handleChange = (e) =>{
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };

    const sendRequest = async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,{
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
            <Button type="submit" variant="contained">Update Book</Button>
        </Box>
    </form>
    )
}

export default BookDetail;