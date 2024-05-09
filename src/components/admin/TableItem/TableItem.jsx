import axios from 'axios'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { Toaster,toast } from 'react-hot-toast'
function TableItem({item}) {
    const {data,setData}=useContext(MainContext)
    const deleteItem=(id)=>{
        axios.delete(`http://localhost:3000/products/${id}`).then(res=>{
            console.log(res)
            setData([...data.filter(item=>item.id!=res.data.id)])
            toast.success('ITEM SILINDI SUKUR')
        })
    }
  return (
   
    <tr>
      <th scope="row">{item.id}</th>
      <td><img src={item.image} width='50px' height='50px' alt="" /></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button className='btn btn-danger' onClick={()=>{
        deleteItem(item.id)
      }}>Delete</button></td>
    </tr>
  )
}

export default TableItem
