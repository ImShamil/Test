document.addEventListener('DOMContentLoaded', ()=>{
    let el_form = document.querySelector('form');
    if (!el_form) return;

    let el_message = document.querySelector('.messages-list__box');
    let last_user;
    let last_date;
    let messagesList=[
       {
           date:"20 октября 2017",
           messages:[
               {
                   user:"left",
                   message:"Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, - культурные ценности. Произведения искусства, антиквариат, иные предметы коллекционирования – все это имущество, безусловно высокая стоимость которого."
               },
               {
                   user:"right",
                   message:"Это означает,"
               },
               {
                   user:"left",
                   message:"доме, офисе, кабинете, мастерской"
               }
           ]
       },
       {
           date:"21 октября 2017",
           messages:[
               {
                   user:"right",
                   message:"Это означает,"
               },
               {
                   user:"left",
                   message:"доме, офисе, кабинете, мастерской"
               },
           ]
       }
       
   ];
   
   messagesList.forEach((item)=>{
       let date=item.date;
       last_date=date;
       console.log(date);
       let dateBox=`
       <div class="date-message">
            <div class="date-message__box">
                <div class="date-message__date">
                    ${date}
                </div>
            </div>
       </div>`;
       console.log(dateBox);
   
      if(el_message){
       el_message.insertAdjacentHTML("beforeend",dateBox);
      }
       let messages=item.messages;
       messages.forEach((item)=>{
           let user=item.user;
           last_user=user;
           let message=item.message;
           let messageBox;
           if (user=='right'){
                messageBox=
                `<div class="user user--right">
                    <div class="user__box user__box--right">
                        <div class="user__logo user__logo--right"><img src="images/user-logo.png" alt="user-logo"> </div>
                        <div class="user__message-text user__message-text--right">${message}</div>
                    </div>
                </div>`
           }
           if (user=='left'){
                messageBox=`
                <div class="user user--left">
                    <div class="user__box user__box--left">
                        <div class="user__logo user__logo--left"> <img src="images/user-logo.png" alt="user-logo"> </div>
                        <div class="user__message-text user__message-text--left">${message}</div>
                    </div>
                </div>`
            }
           let box=document.querySelector('.messages-list__box>.date-message:last-child>.date-message__box');
           if(box){
            box.insertAdjacentHTML("beforeend",messageBox);
           }
       });
   });
    el_form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let your_message = el_form.querySelector('[name="user-message"]').value;

        let date = new Date().toLocaleString('default', {day:"numeric",month: 'long',year:'numeric' }).slice(0,-3);

        if(your_message){
            let user=(last_user=='right')?'left':'right';
                last_user=user; 
            if(date!=last_date){
                let dateBox=`
                <div class="date-message">
                     <div class="date-message__box">
                         <div class="date-message__date">
                             ${date}
                         </div>
                     </div>
                </div>`;
                if(el_message){
                    el_message.insertAdjacentHTML("beforeend",dateBox);
                   }
                   if (user=='right'){
                    messageBox=
                    `<div class="user user--right">
                        <div class="user__box user__box--right">
                            <div class="user__logo user__logo--right"><img src="images/user-logo.png" alt="user-logo"> </div>
                            <div class="user__message-text user__message-text--right">${your_message}</div>
                        </div>
                    </div>`
               }
               if (user=='left'){
                    messageBox=`
                    <div class="user user--left">
                        <div class="user__box user__box--left">
                            <div class="user__logo user__logo--left"> <img src="images/user-logo.png" alt="user-logo"> </div>
                            <div class="user__message-text user__message-text--left">${your_message}</div>
                        </div>
                    </div>`
                }
                let box=document.querySelector('.messages-list__box>.date-message:last-child>.date-message__box');
                if(box){
                 box.insertAdjacentHTML("beforeend",messageBox);
                }

            }
            else{

            }
        }
        
    })
})