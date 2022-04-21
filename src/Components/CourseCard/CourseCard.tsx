import { useState  } from 'react'
import './courseCard.css'
import android from '../../Assets/Icons/android.png'
import TableView from './Table'
import Button from '../Button/Button'
import ExpandedTable from '../CourseCard/ExpandedTable'


function CourseCard() { 

    const [expand, setExpand] = useState(false);


    function handleExpand() { 
        setExpand(!expand)
    }

    return ( 
        <div className={!expand ? "course-card" : "expend-active"}>
            <div className='card-wrapper'>
            <div className='card-hearder'>
                <p className='small w-normal dark'>TRILHA <span className='blue'>ANDROID</span></p>
                <img src={android} />
            </div>

            <div>
                <p className='title-text dark large'>
                    WebServices com Retrofit e Imagens Glide
                </p>
            </div>
            </div>

            <div className='table-view-wrapper'>
                <TableView />
                <hr className='divider' />
                <TableView />
                <hr className='divider' />
                <TableView />
                <Button label='INSCRICOES A PARTIR DE 13/01' />
                <Button color='primary' label='Pagina do curso' />
            </div>

<div onClick={handleExpand} className="expend normal medium dark">
    Sobre as aulas 
<i className={!expand ? "bi bi-chevron-compact-down" : "bi bi-chevron-compact-up"}></i>

</div >
          <div className={expand ? "expanded" : "hidden"}>
          <ExpandedTable />
            <ExpandedTable />
            <ExpandedTable />
          </div>
        </div>
    )
}
export default CourseCard;