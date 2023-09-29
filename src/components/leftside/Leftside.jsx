import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './Leftside.css'
export default function Leftside() {
  return (
    <section className='leftside'>
        <div className="leftsideWrapper">
            <div className="leftsideSearch">
                <SearchIcon className='leftsideSearchIcon'/>
                <input type="text" className="leftsideSearchbar" placeholder='search vault' />
                <AddIcon className='leftsideAddIcon'/> 
            </div>
            <ul className="leftsideServiceList">
                <li className="leftSideServiceItem active">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
                <li className="leftSideServiceItem">
                    <img src="img/adobe.jpg" alt="" className="leftsideServicePic" />
                    <div className="leftSideServiceDesc">
                        <h3 className="leftSideServiceTitle">Adobe</h3>
                        <span className="leftSideServiceEmail">test@gmail.com</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
