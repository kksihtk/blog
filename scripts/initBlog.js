function blogHTML() {
    let body = document.body;

    let script1 = document.createElement('script');   //
    script1.src = './scripts/utils/footer.js';        //     Компонент Футера
    body.appendChild(script1);                        //

    // let script2 = document.createElement('script');   //
    // script2.src = './scripts/utils/snowfall.js';      //     Снег (На гитхабе не работает)
    // body.appendChild(script2);                        //

    let script3 = document.createElement('script');   //
    script3.src = './scripts/utils/blogspot.js';      //     Компонент новостной ленты
    body.appendChild(script3);                        //

    let script4 = document.createElement('script');   //
    script4.src = './scripts/utils/changeTheme.js';   //     Изменение темы
    body.appendChild(script4);                        //

    let script5 = document.createElement('script');   //
    script5.src = './scripts/utils/query.js';         //     Компонент поиска
    body.appendChild(script5);                        //

    let script6 = document.createElement('script');   //
    script6.src = './scripts/utils/scrollButton.js';  //     Компонент кнопки "Вверх"
    body.appendChild(script6);                        //

    let script7 = document.createElement('script');    //
    script7.src = './scripts/utils/contactUsButton.js';//    Компонент кнопки для связи
    body.appendChild(script7);                         //
}

blogHTML()