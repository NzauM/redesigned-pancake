// A function component to display a h1 saying, Students component called
// Render a list of students together with their names and classes
import React from "react"
import { useState, useEffect } from "react"
import StudentForm from "./StudentForm"
import Nav from "./Nav"
import { Link } from "react-router-dom"

function Student(){
    
    // const students = [
    //     {firstname: "Isaac Kuria", class:"SDFT10"},
    //     {firstname: "Wilson Mwangi", class:"SDFT10"},
    //     {firstname: "Javan Abbot", class:"SDFT10"},
    //     {firstname: "Eric Ouma", class:"SDFT10"},
    //     {firstname: "Hope Makanda", class:"SDFT10"},
    //     {firstname: "Laureen Nzuki", class:"SDFT10"}
    // ]
    const[studentsList, setStudentsList] = useState([])
    
    // useEffect(()=>{sampleFunction}) // sample function will run everytime the component renders
    // useEffect(()=>{sampleFunction},[]) // sample function will run only once after the component renders
    // useEffect(()=>{sampleFunction},[studentsList]) //sample function will run everytime studentsList changes

    useEffect(()=>{
        fetch("http://localhost:3000/students").then(resp=>resp.json()).then(data=>{
            // set received data to state
            console.log(data)
            setStudentsList(studentsList=>data)
        })
    },[])


    let studentDisplay = studentsList.map(studentDisplayFunction)

    function studentDisplayFunction(student,currind,originalArray){
        return(
            <tr key={currind}>
                <td>{student.firstname}</td>
                <td>{student.class}</td>
                <td> <Link to={`/viewstudent/${student.id}`}><button>More Details</button></Link></td>
                {/* <h1>Student Name: {student.firstname}</h1>
                <p>Student's Class: {student.class}</p> */}
            </tr>
        )
    }
    // function handleAddStudent(){
    //     // add a new student to the studentlist
    //     let newStudent = {firstname: "Mercy Nzau", class:"SDFT10"}
    //     let newStudnt2 = {firstname: "Avant Muchiri", class:"SDFT10"}
    //     // setStudentsList()
        // setStudentsList((studentsList)=>[...studentsList,newStudent])
        // setStudentsList((studentsList)=>[...studentsList,newStudnt2])
    //     console.log(studentsList)
    //     // students.push(newStudent)
    //     // console.log(students);
    // }

    function dataReceiver(datatobereceived){
        console.log(datatobereceived)
        setStudentsList((studentsList)=>[...studentsList,datatobereceived])        
    }
    
    return(
        <>
        <Nav/>
        <h1>Students component called</h1>
        <h1>Add Student Form</h1>
        <table>
            <thead>
                <th>Name</th>
                <th>Class</th>
                <th>Action</th>
            </thead>
            <tbody>
            {studentDisplay}
            </tbody>
        </table>
        {/* <StudentForm functionprop={dataReceiver}/> */}
        {/* <button onClick={handleAddStudent}>Add Student</button> */}
        
        </>
        

    )
}

export default Student