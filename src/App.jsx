import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './Routes/routes'
import MainContext from './context/context';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

const router=createBrowserRouter(ROUTES)
const [data,setData]=useState([])
const [loading,setSLoading]=useState(true)
const [error,setError] =useState('')
useEffect(()=>{
  axios.get('http://localhost:3000/products').then(res=>{
    setData([...res.data])
    setSLoading(false)
  }).catch(error=>{
    setError(error)
    setSLoading(false)
  })
},[])
const contextData={
  data,setData,loading,setSLoading,error,setError
}

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router}/>
    </MainContext.Provider>

  )
}

export default App
