import "./Card.css";
import Heart from "../../assets/heart.svg";
import HeartFilled from "../../assets/heartFilled.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";
import Info from "../../assets/info.svg";
import { useState } from "react";

const Card = ({ post }) => {
  const [like, setLike] = useState(false);

  const handleNotification = () => {
    setLike(true);
  };

  return (
    <div className="cardContainer">
      <div className="userInfo">
        <img src={post.userImg} alt="" />
        <span>{post.fullname}</span>
      </div>

      <img className="postImg" src={post.postImg} alt="" />

      <div className="postIcons">
        {like ? (
          <img src={HeartFilled} alt="" />
        ) : (
          <img src={Heart} alt="" onClick={handleNotification} />
        )}
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
        <img src={Info} alt="" className="infoImg" />
      </div>
    </div>
  );
};

export default Card;
