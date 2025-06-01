import ReactDOM from "react-dom/client";
import "./index.css";
import book1 from "./Images/book1.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img src={book1} alt="Intersting Facts for curious Minds" />
);

const Title = () => {
  return <h2> My First Component </h2>;
};
const Author = () => <h4>Imge Placeholder</h4>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
