export default function ArticleCard(props) {
  return (
    <div className="ArticleCard">
      <img src={props.imgurl} alt={props.mealname} />
      <h1>{props.mealname}</h1>
      <p>{props.instructions}</p>
    </div>
  );
}
