import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api/index.js";

function EditCard() {
  const { deckId } = useParams();
  const { cardId } = useParams();

  const [card, setCard] = useState({});
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  useEffect(() => {
    readCard(cardId).then(setCard);
  }, [cardId]);

  const history = useHistory();

  if (!card.id) return null;

  const handleChange = ({ target }) => {
    const value = target.value;
    setCard({
      ...card,
      [target.name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deck.id}`);
  };

  function Breadcrumb() {
    return (
      <nav aria-label="breadcrumb" style={{ padding: "5px 10px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">Edit Card {card.id}</li>
        </ol>
      </nav>
    );
  }

  return (
    <>
      <div>
        <Breadcrumb />
      </div>
      <div className="container">
        <h2>Edit Card</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="front">Front</label>
          <br></br>
          <textarea
            className="container fluid mb-3"
            id="front"
            name="front"
            rows={4}
            onChange={handleChange}
            value={card.front}
          />
          <br></br>
          <label htmlFor="back">Back</label>
          <br></br>
          <textarea
            className="container fluid"
            id="back"
            name="back"
            rows={4}
            onChange={handleChange}
            value={card.back}
          />
        
        <div className="row">
          <Link to={`/decks/${deck.id}`}>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        </form>
      </div>
    </>
  );
}

export default EditCard;
