import react, { useState, useEffect } from "react";

function GetQuote() {
  const [quote, SetQuote] = useState("");
  const [author, SetAuthor] = useState("");

  const getQuoteFromAPI = () => {
    fetch("https://api.quotable.io/random", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        SetQuote(data["content"]);
        SetAuthor(data["author"]);
      })
      .catch((error) => console.log(error));
  };

  const newQuote = () => {
    getQuoteFromAPI();
  };

  useEffect(() => {
    getQuoteFromAPI();
  }, []);

  return (
    <div id="quote-box">
      <div>
        <p id="text">
          &quot;
          {quote}
          &quot;
        </p>
        <span id="author">- {author}</span>
      </div>
      <div className="bottom">
        <button
          className="button"
          id="new-quote"
          type="submit"
          onClick={newQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default GetQuote;
