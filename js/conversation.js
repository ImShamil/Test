document.addEventListener('DOMContentLoaded', ()=>{
    let el_form = document.querySelector('form');
    if (!el_form) return;    

    let last_user="";
    let last_date="";
    
    let messagesList=[
       {
           date:"20 октября 2017",
           messages:[
            {
                user:"left",
                message:"Это контент для отступа"
            },
            {
                user:"right",
                message:"Это контент для отступа"
            },
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

   let insertDateBox=(date)=>{
    if(date!=last_date){
        last_date=date;
        let messagesListBox = document.querySelector('.messages-list__box');
        let dateMessage=
        `<div class="date-message">
             <div class="date-message__box">
                 <div class="date-message__date">
                     ${date}
                 </div>
             </div>
        </div>`;
        if(messagesListBox){
            messagesListBox.insertAdjacentHTML("beforeend",dateMessage);
        }
    }
   }

   let insertMessage=(user, message)=>{
    let userBox;
    last_user=user;
    switch(user){
        case 'right':
            userBox=
            `<div class="user user--right">
                <div class="user__box user__box--right">
                    <div class="user__logo user__logo--right"><img src="images/user-logo.png" alt="user-logo"> </div>
                    <div class="user__message-text user__message-text--right">${message}</div>
                </div>
            </div>`;
            break;
        case 'left':
            userBox=
            `<div class="user user--left">
                <div class="user__box user__box--left">
                    <div class="user__logo user__logo--left"> <img src="images/user-logo.png" alt="user-logo"> </div>
                    <div class="user__message-text user__message-text--left">${message}</div>
                </div>
            </div>`
    }
    let dateMessageBox=document.querySelector('.date-message:last-child>.date-message__box');
    if(dateMessageBox){
        dateMessageBox.insertAdjacentHTML("beforeend",userBox);
    }
   }
   
   let autoScroll=()=>{
    let messagesListBox=document.querySelector('.messages-list__box');
    messagesListBox.scrollTop=messagesListBox.scrollHeight;
   }
   
   messagesList.forEach((item)=>{
       let date=item.date;
       let messages=item.messages;
       insertDateBox(date);
       messages.forEach((item)=>{
           let user=item.user;
           let message=item.message;
           insertMessage(user,message);
       });
   });
   
   window.onload=autoScroll;
   
    el_form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let message = el_form.querySelector('[name="user-message"]').value;
        let date = new Date().toLocaleString('default', {day:"numeric",month: 'long',year:'numeric' }).slice(0,-3);
        if(message){
            let user=(last_user=='right')?'left':'right';
            insertDateBox(date);
            insertMessage(user,message);
            autoScroll();
        }
        
    });
    
})

