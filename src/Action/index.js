export const setcart = (id,name,description,qty,unitprice,image) => async dispatch => {
    dispatch({
        type:"ADDCART",
        payload:{
            id:id,
            name:name,
            description:description,
            qty:qty,
            unitprice:unitprice,
            image:image

        }
    })
}