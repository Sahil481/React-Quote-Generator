import react from "react";

function Quotes(quote, author) {
  return (
    <div id="quote-box">
      <div>
        <p id="text">
          &quot;
          {quote}
          &quot;
        </p>
        <span id="author">{author}</span>
      </div>
      <div className="bottom">
        <button className="button" id="new-quote" type="submit">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quotes;
