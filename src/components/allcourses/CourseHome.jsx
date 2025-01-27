import React from 'react'
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourse from "./OnlineCourse"

function CourseHome() {
    return (
        <>
          <Back title='Explore Courses' />
          <CoursesCard />
          <OnlineCourse/>
        </>
      )
}

export default CourseHome