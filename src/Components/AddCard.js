import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck, createCard } from "../utils/api/index.js";

function AddCard() {
  /* Use the readDeck() function from src/utils/api/index.js
    to load the deck that you're adding the card to. 
    Use the :deckId to select the deck. */
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const handleChange = ({ target }) => {
    const value = target.value;
    setCard({
      ...card,
      [target.name]: value,
    });
  };
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard({ card, deckId }).then(setCard).then(updateDeck);
    setCard({
      front: "",
      back: "",
      deckId: { deckId },
    });
  };

  function Breadcrumb() {
    return (
      <nav aria-label="breadcrumb" style={{ padding: "5px 10px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">Add Card</li>
        </ol>
      </nav>
    );
  }

  return (
    <>
      <div>
        <Breadcrumb />
      </div>
      <div>
        <h1 className="ml-1">{deck.name}: Add Card</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="front" className="ml-1">
            <h4>Front</h4>
          </label>
          <br></br>
          <textarea
            className="container fluid mb-3"
            id="front"
            name="front"
            placeholder="Front side of card"
            rows={4}
            onChange={handleChange}
            value={card.front}
          />
          <label htmlFor="back" className="ml-1">
            <h4>Back</h4>
          </label>
          <textarea
            className="container fluid"
            id="back"
            name="back"
            placeholder="Back side of card"
            rows={4}
            onChange={handleChange}
            value={card.back}
          />

          <div className="row ml-1">
            <Link to={`/decks/${deck.id}`}>
              <button type="button" className="btn btn-secondary btn-lg">
                Done
              </button>
            </Link>
            <button type="submit" className="btn btn-primary btn-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCard;
