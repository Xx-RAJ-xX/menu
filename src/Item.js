import React from 'react';

const Item = ({item,meal}) => {

    const {name,img,price,info,type}=item;
    let show=false;

    if(meal==="all"){show=true;}
    else if (type===meal){show=true;}

    return (
        <>
        { show && <article  className='menu-item'>

             <img src={img} alt={name} className='photo'/>
            <div className='item-info'>
                <header>
                 <h3>{name}</h3>
                 <h4 className='price'>{price}</h4>
                 </header>
            <p className='item-text'>{info}</p>
            </div>

        
        </article>}
        </>
    )
}

export default Item
