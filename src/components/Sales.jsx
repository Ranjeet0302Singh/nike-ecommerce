import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({endpoint:{title,items}}) => {
    // console.log(endpoint.items);
  return (
    <>
    <div>
        <Title title={title}/>
        <div>
            {items?.map((item,i)=>(

                <Item {...item} key={i}/>
                
            ))}
        </div>
    </div>
    </>
  )
}

export default Sales