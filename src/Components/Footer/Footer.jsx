import './footer.css'
import logo from '../../Assets/Logo/logo.png'

const Footer = () => { 
    return ( 
        <div className='footer'>
            <img className='logo' src={logo} />
            <p className='medium dark light'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                 Impedit dolorum quo repellendus magni, officia ea mollitia asperiores! <br/>
                  Aliquam explicabo perferendis quis nisi quaerat unde accusamus laborum <br/>
                  cupiditate quae sapiente? Deserunt?
            </p>

            <p className='small gray'> copyright samsung electronics 2022. all rights reserved </p>
        </div>
    )
}
export default Footer;