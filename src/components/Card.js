export default function Card(a){
      return(
            <div className='cardWrapper'>
                        <img src={a.src} alt='sport img'/>
                        <span><b>{a.about}</b></span>
                        <p alt='sport img'>{a.title}</p>
                        <div className="small">updated : {a.date}</div>
            </div>
      )
}