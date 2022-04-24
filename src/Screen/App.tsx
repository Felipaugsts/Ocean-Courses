import { useEffect, useState } from 'react'
import './App.css'
import Navigation from '../Components/Navigation/Navigation'
import CourseCard from '../Components/CourseCard/CourseCard'
import getAll from '../Data/api'
import Courses from '../Data/model'
function App() {

  const [courseArray, setList] = useState([])

const getAllCourses = () => { 
     getAll().then((res: any) => { 
    console.log(res.data)
     setList(res.data)
  })

}
useEffect(() => { 
  console.log("updated", courseArray)
  }, [courseArray])

 useEffect(() => { 
  getAllCourses()
  }, [])



  return (
    <div className="App">
      <Navigation />
      <div className='course-list'>
      
        { courseArray?.map((card: any, i: any) => {
      return <CourseCard key={i} course={card} />;
    })
    }
      </div>
    </div>
  )
}

export default App
