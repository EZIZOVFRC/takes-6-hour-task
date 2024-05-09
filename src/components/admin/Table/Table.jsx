import React from 'react'
import TableItem from '../TableItem/TableItem'

function Table({items}) {
  return (
    <div>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">del</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item,index)=>{
        return (<TableItem key={index} item ={item}/>)
    })}
  </tbody>
</table>
    </div>
  )
}

export default Table
