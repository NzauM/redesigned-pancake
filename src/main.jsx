import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Student from './components/Student.jsx'
import StudentForm from './components/StudentForm.jsx'
import ViewStudent from './components/ViewStudent.jsx'
import EditStudent from './components/EditStudent.jsx'

const name = "Mercy Nzau"

const myroutes = createBrowserRouter([
  {
    path:'/',
    element:<App propname={name}/>
  },
  {
    path:'/students',
    element: <Student />
  },
  {
    path:'/addstudent',
    element:<StudentForm/>    
  },
  {
    path:'/viewstudent/:studentId', // /viewstudent/5rt4  
    element:<ViewStudent/>,
    children:[
      {
        path:'/viewstudent/:studentId/edit', //viewstudent/3409/edit
        element:<EditStudent/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {myroutes}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
