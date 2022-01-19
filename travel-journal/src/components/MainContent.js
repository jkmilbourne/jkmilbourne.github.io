import Card from "./Card"

import data from "../data/data";

export default function MainContent() {
  const cardData = data.map(card => {
    return(
      <Card 
        key={card.id}
        card={card}
      />
    )
  })
  return (
    <div className="container">
      {cardData}
    </div>
  )
}