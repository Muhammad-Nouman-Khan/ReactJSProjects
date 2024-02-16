import './Navbar.css'
import Notification from '../../assets/notification.svg'
import Message from '../../assets/message.svg'
import Settings from '../../assets/settings.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className="logo">
            <h1>Notify</h1>
        </div>

        <div className="navIcons">
            <div className="icon">
                <img src={Notification} alt="" />
                <div className="counter">0</div>
            </div>

            <div className="icon">
                <img src={Message} alt="" />
                <div className="counter">0</div>
            </div>

            <div className="icon">
                <img src={Settings} alt="" />
                <div className="counter">0</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar