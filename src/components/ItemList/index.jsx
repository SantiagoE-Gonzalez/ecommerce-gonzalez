import React from 'react'
import Item from '../Item'

function ItemList({items}) {
  return (
    <div className="row">
        {items.map(item => {
          return <Item title={item.title} pictureUrl={item.image} price={item.price}></Item>
        })}
    </div>
  )
}

export default ItemList