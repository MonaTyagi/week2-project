export default function ArticleCard(props) {
  return (
    <div className="ArticleCard">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
