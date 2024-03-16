function footerInfo() {
    document.getElementById('footer').innerHTML = "";

    let year = "2024";
    let version = "v0.20 b160324.1000";
    let footerCopyrightSpanText = document.createTextNode(` Copyright ${year}, ${version}`);

    let footerCopyrightSpan = document.createElement('span');
    footerCopyrightSpan.appendChild(footerCopyrightSpanText);

    let footerCopyright = document.createElement('div');
    footerCopyright.classList.add('footer_copyright');
    footerCopyright.appendChild(footerCopyrightSpan);

    em = document.getElementById('footer');
    em.appendChild(footerCopyright);
}


footerInfo();