let arr;
let cardAmount=12;
arr=[
      {
            about:'Football',
            title:'World Cup exits: Belgium and Germany knocked out in group stages while Japan top Group E'
      },
      {
            about:'Football',
            title:'World Cup: Australia to play Argentina in knockouts, Mexico win but miss out on last-16'
      },
      {
            about:'Football',
            title:'World Cup: France will go through to the next round despite Tunisia upset '
      },
      {
            about:'Football',
            title:'FIFA World Cup Qatar 2022: The story of week 2'
      },
      {
            about:'Football',
            title:'World Cup catch-up: Germany and Belgium eliminated, Japan stun Spain'
      },
      {
            about:'Football',
            title:'World Cup 2022: Poland qualify amid late drama to join France, Australia and Argentina '
      },
      {
            about:'Football',
            title:'World Cup 2022: England beat Wales and USA beat Iran in Tuesday night thriller'
      },
      {
            about:'Football',
            title:'Qatar World Cup: Portugal beat Uruguay to secure place in final 16'
      },
      {
            about:'Football',
            title:'World Cup: Germany salvage 1-1 draw with Spain to keep tournament hopes alive'
      },
      {
            about:'Football',
            title:'Qatar World Cup: Morocco pull off new upset as Belgium humbled 2-0'
      },
      {

            about:'Football',
            title:'World Cup Sunday: Morocco stun Belgium 2-0, Croatia win 4-1, Germany draw 1-1 with Spain'
      },
      {     
            about:'Football',
            title:'France 2-1 Denmark: Mbappe double helps French reach World Cup knockout stage'
      },

]
for(let i=0;i<cardAmount;i++){
      arr[i].src=`Third-React-App/images/cardimg/${i+1}.jpg`;
      arr[i].id=i;
      arr[i].date=new Date().toLocaleDateString();
}
export default arr;
