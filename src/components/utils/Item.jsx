import React from 'react'
import {AiFillStar ,BsFillBagHeartFill}from "react-icons/all"
const Item = ({id,color,shadow,title,text,img,rating,price,btn}) => {
    console.log(color);
  return (
    <>
    <div>
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <div>
                <div><h1>{price}</h1></div>
                <div><AiFillStar className='icon-style text-slate-900'/> <h1>{rating}</h1></div>
            </div>
            <div>
                <button type='button' className=''>
                    <BsFillBagHeartFill className='icon-style text-slate-900'/>
                </button>
                <button type='button' className=''>{btn}</button>
            </div>
        </div>

        <div>
            <img src={img} alt="img/item-img" />
        </div>
    </div>
    </>
  )
}

export default Item