import './courseCard.css'
import Courses from '../../Data/model'

const TableView: React.FC<{details: Courses, tableType: any}> = ({details, tableType}) => { 
    function secondIcon() { 
        if (tableType === "date") {
            return <i className="bi bi-calendar blue iconSpacer" />
        }
        if (tableType === "classes") {
            return <i className="bi bi-clock blue iconSpacer" />
        }
        if (tableType === "speaker") {
            return <i className="bi bi-geo-alt blue iconSpacer"></i>
        }
    }
    function firstIcon() { 
        if (tableType === "date") {
            return <i className="bi bi-calendar blue iconSpacer" />
        }
        if (tableType === "classes") {
            return <i className="bi bi-book blue iconSpacer" />
        }
        if (tableType === "speaker") {
            return <i className="bi bi-person blue iconSpacer"></i>
        }
    }
    return ( 
        <div className='table-view'>
            
            {/* TABLE VIEW FIRST COLUMN  */}
                <div className='item item-text '>
                    { firstIcon()}
                    <p className='small dark w-normal'>{ tableType === "date" ? 
                    (<span>INICIO EM <br /></span>) : "" }
                    
                    <span className='medium heavier dark'>
                    {
                        tableType === "date" ? "12/02" : tableType === "classes" ? 
                        `${details.events.length} aulas` : details.speakers[0]
                    } </span>
                    </p>
                </div>

                {/* TABLE VIEW SECOND COLUMN  */}
                <div className='item2 item-text '>
                    {secondIcon()}

                    <p className='small w-normal dark'>
                    {
                        tableType === "date" ? (
                            <p>
                                TERMINO <br />
                    
                    <span className='medium heavier dark'>12/01</span>
                            </p>
                        ) : tableType === "classes" ? "12H" : details.campus
                    }
                    </p>
                </div>
            </div>
    )
}
export default TableView;