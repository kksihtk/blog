function footerInfo() {
    document.getElementById('footer').innerHTML = "";

    let year = "2024";
    let version = "0.20 хочу релиз побыстрее";
    let footerCopyrightSpanText = document.createTextNode(` Copyright ${year}, версия ${version}`);

    let footerCopyrightSpan = document.createElement('span');
    footerCopyrightSpan.appendChild(footerCopyrightSpanText);

    let footerCopyright = document.createElement('div');
    footerCopyright.classList.add('footer_copyright');
    footerCopyright.appendChild(footerCopyrightSpan);

    em = document.getElementById('footer');
    em.appendChild(footerCopyright);
}


footerInfo();