// A function component to display a h1 saying, Students component called
// Render a list of students together with their names and classes
import React from "react"
import { useState } from "react"

function Student(){
    
    const students = [
        {firstname: "Isaac Kuria", class:"SDFT10"},
        {firstname: "Wilson Mwangi", class:"SDFT10"},
        {firstname: "Javan Abbot", class:"SDFT10"},
        {firstname: "Eric Ouma", class:"SDFT10"},
        {firstname: "Hope Makanda", class:"SDFT10"},
        {firstname: "Laureen Nzuki", class:"SDFT10"}
    ]
    const[studentsList, setStudentsList] = useState(students)

    

    // stateSetterFunction("New Value of State Variable") 
    // stateSetterFunction((statevariable)=>"New Value of State Variable")

    let studentDisplay = studentsList.map(studentDisplayFunction)

    function studentDisplayFunction(student,currind,originalArray){
        return(
            <div key={currind}>
                <h1>Student Name: {student.firstname}</h1>
                <p>Student's Class: {student.class}</p>
            </div>
        )
    }
    function handleAddStudent(){
        // add a new student to the studentlist
        let newStudent = {firstname: "Mercy Nzau", class:"SDFT10"}
        let newStudnt2 = {firstname: "Avant Muchiri", class:"SDFT10"}
        // setStudentsList()
        setStudentsList((studentsList)=>[...studentsList,newStudent])
        setStudentsList((studentsList)=>[...studentsList,newStudnt2])
        console.log(studentsList)
        // students.push(newStudent)
        // console.log(students);
    }
    return(
        <>
        <h1>Students component called</h1>
        <button onClick={handleAddStudent}>Add Student</button>
        {studentDisplay}
        </>
        

    )
}

export default Student