import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function StudentForm({functionprop}){
    const[studentName, setStudentName] = useState("")
    const[studentClass, setStudentClass] = useState("")
    const mynavigator = useNavigate()

    function handleNameInput(e){
        setStudentName((studentName)=> studentName= e.target.value)
        // console.log(studentName)
    }

    function handleClassInput(e){
        setStudentClass((studentClass)=>e.target.value)
        // console.log(studentClass)
    }

    function handleAddNewStudent(e){
        e.preventDefault()
        // create a students object e.g {firstname: "Laureen Nzuki", class:"SDFT10"}
        // find a way to pass this new students object to our parent component.
        const studentsObj = {firstname:studentName, class:studentClass}
        console.log(studentsObj)
        // functionprop(studentsObj)
        // take my users back to /students
        mynavigator('/')
    }
    
    return(
        <>
        <form onSubmit={handleAddNewStudent}>
            <label htmlFor="stdName">Student Name</label>
            <input onChange={handleNameInput} type="text" value={studentName} placeholder="Enter Student's Name" /> 
            <label htmlFor="stdClass">Student Class</label>
            <input onChange={handleClassInput} type="text" value={studentClass} placeholder="Enter Student's Class" />
            <button type="submit">Add Student</button>
        </form>
        </>
    )
}

export default StudentForm;