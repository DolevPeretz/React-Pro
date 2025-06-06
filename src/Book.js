const Book = (props) => {
  const { img, title, author, alt, number } = props;
  return (
    <article className="book">
      <img src={img} alt={alt} />
      <h2> {title} </h2>
      <h4>{author}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  );
};
export default Book;
