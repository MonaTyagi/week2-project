export default function ArticleCard(props) {
  return (
    <div className="ArticleCard">
      <h1>{props.mealname}</h1>
      <img src={props.imgurl} alt={props.mealname} />
      <p>{props.instructions}</p>
    </div>
  );
}
