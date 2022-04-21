import './courseCard.css'

function TableView() { 
    return ( 
        <div className='table-view'>
            
                <div className='item item-text '>
                <i className="bi bi-calendar blue" />

                    <p className='small dark w-normal'>INICIO EM <br />
                    
                    <span className='medium heavier dark'>12/01 as 14h00 </span>
                    </p>
                </div>
                <div className='item2 item-text '>
                    <i className="bi bi-calendar blue" />

                    <p className='small w-normal dark'>TERMINO <br />
                    
                    <span className='medium heavier dark'>12/01</span>
                    </p>
                </div>
            </div>
    )
}
export default TableView;