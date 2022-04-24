import { useEffect, useState } from 'react'
import './App.css'
import Navigation from '../Components/Navigation/Navigation'
import CourseCard from '../Components/CourseCard/CourseCard'
import getAll from '../Data/api'
function App() {

  const [courseArray, setList] = useState([])
  const [limit, setLimit] = useState(8)

const getAllCourses = () => { 
     getAll().then((res: any) => { 
    console.log(res.data)
     setList(res.data)
  })
}
const showAll = () => {
  const newLimit = limit + 4
  setLimit(newLimit)
}

 useEffect(() => { 
  getAllCourses()
  }, [])



  return (
    <div className="App">
      <Navigation />
      <div className='course-list'>
        { 
        courseArray?.slice(0, limit).map((card: any, i: any) => {
        return <CourseCard key={i} course={card} />;
          })
         }
      </div>
      <button className='button-showall medium dark' onClick={showAll}>Ver mais</button>
    </div>
  )
}

export default App
