import React from "react";
import "./Rightside.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Rightside() {
  return (
    <section className="rightside">
      <div className="rightsideWrapper">
        <div className="rightsideTop">
          <span className="rightsideEdit ">
            Edit
            <EditIcon className="rightsideEditIcon" />
          </span>
          <span className="rightsideDelete">
            Delete
            <DeleteIcon className="rightsideDeleteIcon" />
          </span>
        </div>
        <div className="rightsideHeader">
          <img
            src="img/adobe.jpg"
            alt="Header"
            className="rightsideServicePic"
          />
          <div className="rightsideService">
            <h3 className="rightsideServiceTitle">Adobe</h3>
            <span className="rightsideServiceLogin">Login</span>
          </div>
        </div>
        <div className="rightsideInfo">
          <div className="rightsideInfoInput">
            <label>Username</label>
            <input
              type="text"
              className="rightsideUsernameInput"
              value="alijkhfdes@gmail.com"
              disabled
            />
            </div>
            <div className="rightsideInfoInput">
            <label>Password</label>
            <input
              type="password"
              className="rightsidePassInput"
              value="123456789123456789"
              disabled
            />
            <VisibilityIcon className="rightsideInfoIcon"/>
            </div>
            <div className="rightsideInfoInput">
            <label>Website</label>
            <span className="rightsideWebsite">adobe.com</span>
            </div>
        </div>
        <div className="rightsideDesc">
          <h3 className="rightsideDescTitle">description</h3>
          <div className="jh">
          <p className="rightsideDescText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio nostrum sunt animi quos perspiciatis iste fugit placeat recusandae, reprehenderit nesciunt reiciendis sint tenetur nulla eveniet laborum est consectetur ab veniam eius quam! Repellat, perferendis eos reiciendis ex ab ratione soluta nesciunt, quam odit molestiae explicabo repellendus qui corporis cupiditate!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
