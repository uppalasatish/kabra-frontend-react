import React from "react";
import { connect } from "react-redux";
const MyCart = ({list}) =>{
    console.log("this is list " +list );
    return(
        <div>
            <ul>
                {list && list.map((item,i)=>(
                    <li className="book">
                        <div className="card">
                            <img src={item.image} alt={item.image}/>
                            <article>BY {item.description}</article>
                            <h3>{item.name}</h3>
                            <h2>Rs .{item.unitprice}</h2>
                        </div>    
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state =>({
    list:state.cartreducer
    
})
export default connect(mapStateToProps)(MyCart);