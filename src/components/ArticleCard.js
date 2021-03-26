import "./ArticleCard.css";
import LikeCounter from "./LikeCounter";

export default function ArticleCard(props) {
  return (
    <div className="ArticleCard">
      <h1>{props.mealname}</h1>
      <img src={props.imgurl} alt={props.mealname} className="ArticleImg" />
      <p>{props.instructions}</p>
      <LikeCounter />
    </div>
  );
}
