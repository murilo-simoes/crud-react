import React, { useState } from 'react';
import FormDialog from "./Dialog"
import "./Card.css"


const Card = (props) => {
    const [open, setOpen] = useState(false);

    return ( 
        <>

        <FormDialog
        open={open} 
        setOpen={setOpen}
        id={props.id}
        name={props.name} 
        cost={props.cost} 
        category={props.category} 
        listCards={props.listCards} 
        setListCard={props.setListCard}
        />
        <div className='card-container' onClick={() => setOpen(true)}>
            <h1 className='card-title'>{props.name}</h1>
            <p className='card-category'>{props.category}</p>
            <h3 className='card-cost'>R${props.cost}</h3>
        </div>
        </>
     );
}
 
export default Card;