import React from 'react'
import Item from '../Item'

function ItemList({items}) {
  return (
    <div className="row">
        {items.map(item => {
          /* cuando se hace un map, cada elemento del return debe tener una key */
          return <Item id={item.id} key={item.title} title={item.title} pictureUrl={item.image} price={item.price}></Item>
        })}
    </div>
  )
}

export default ItemList