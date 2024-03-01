function indexHTML() {
    let body = document.body;
    let script1 = document.createElement('script');
    let script2 = document.createElement('script');
    let script3 = document.createElement('script');
    let script4 = document.createElement('script');

    script1.src = './scripts/utils/modal.js';
    body.appendChild(script1);

    script2.src = './scripts/utils/footer.js';
    body.appendChild(script2);

    script3.src = './scripts/utils/snowfall.js';
    body.appendChild(script3);

    script4.src = './scripts/utils/changeTheme.js';
    body.appendChild(script4);
}

indexHTML()