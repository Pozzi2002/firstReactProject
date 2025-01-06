import { useState } from "react"
import { LeftSide } from "../LeftSide/leftSide"
import { Label } from "../LeftSide/leftSide"
export function RightSide() {
    return (
    <div className="paper">
      <h1>Resume</h1>
      <hr/>
      <div className="perDetails">
        <h2>Personal details:</h2>
        <p className='fullName'></p>
        <p className="emailP"></p>
        <p className='phoneP'></p>
        <p className='addressP'></p>
      </div>
      <div className="eduDetails">
        <h2>Education:</h2>
        <p className='educationP'></p>
        <p className="cityEdP"></p>
        <p>
          <span className='startDateEdP'></span>
          <span className='endDateEdP'></span>
        </p>
        <p className='descriptionEdP'></p>
      </div>
      <div className="empDetails">
        <h2>Employment:</h2>
        <p className='positionP'></p>
        <p className="employerP"></p>
        <p>
          <span className='startDateJobP'></span>
          <span className='endDateJobP'></span>
        </p>
        <p className='responsibilitiesP'></p>
      </div>
    </div>
  )
}

