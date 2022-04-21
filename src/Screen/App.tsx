import './App.css'
import Navigation from '../Components/Navigation/Navigation'
import CourseCard from '../Components/CourseCard/CourseCard'
function App() {

  return (
    <div className="App">
      <Navigation />
      <div className='course-list'>
        <CourseCard />
      </div>
    </div>
  )
}

export default App
