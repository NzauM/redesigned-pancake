import React, { useEffect, useState } from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import EditStudent from './EditStudent'
// import { Outlet } from 'react-router-dom'

function ViewStudent() {
    // const dynamicData = useParams()
    // console.log(dynamicData);  //{studentId: 70e9}
    
    const [studentName, setStudentName] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const datafromparams = useParams()
    console.log(datafromparams, "Received From Path Parameters")
    const url = `http://localhost:3000/students/${datafromparams.studentId}`

    
    useEffect(()=>{
        fetch(url).then(r=>r.json()).then(data=>{
            console.log(data, "Specific Student's Details");
            setStudentName(data.firstname)
            setStudentClass(data.class)
        })
    },[])
    
  return (
    <div>
        <h1>Viewing {studentName}'s Details</h1>
        <p>Student Name: {studentName} </p>
        <p>Student Class:{studentClass} </p>
       <Link to={`/viewstudent/${datafromparams.studentId}/edit`}><button>Edit</button></Link> 
        <button>Delete</button>
        <Outlet context={{studentname:studentName, studentclass:studentClass}}/>
              {/* <EditStudent/> */}
    </div>
  )
}

export default ViewStudent