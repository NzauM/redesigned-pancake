import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditStudent() {
    const outletData = useOutletContext()
    const navigatorrrr = useNavigate()
    console.log(outletData)
    // console.log(studentname)
    // console.log(studentclass)
    function handleNavigate(){
        navigatorrrr('/students')
    }
  return (
    <>
    <h1>Edit Student Details</h1>
    <form >
            <label htmlFor="stdName">Student Name</label>
            <input value={outletData.studentname} type="text"  placeholder="Enter Student's Name" /> 
            <label htmlFor="stdClass">Student Class</label>
            <input value={outletData.studentclass} type="text"  placeholder="Enter Student's Class" />
            <button onClick={handleNavigate} type="submit">Edit Student</button>
        </form>
    </>
  )
}

export default EditStudent