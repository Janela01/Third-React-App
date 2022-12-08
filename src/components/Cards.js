import Card from './Card';
import allCards from '../renderedData/allCards';

export default function Cards(){
      const cards=allCards.map(card=>{return <Card key={card.id} date={card.date} src={card.src} about={card.about} title={card.title}/>})
      return(
            <div className='cardsWrapper'>
                  {cards}
            </div>
      )
}