import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading';
import Table from '../../../components/admin/Table/Table';

function Products() {
    const {data,loading}=useContext(MainContext)
    console.log(data);
  return (
    <div>
        <button></button>
        {loading? <Loading/> : <Table items={data}/>}
    </div>
    
  )
}

export default Products
