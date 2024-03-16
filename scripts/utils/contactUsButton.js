function contactUsButtonRender() {
    site = document.getElementById("site")

    contactUs_Section = document.createElement("section")
    contactUs_Section.id = "contactUs"

    contactUs_Span_text = document.createTextNode("Напишите мне")
    contactUs_Span = document.createElement("span")
    contactUs_Span.appendChild(contactUs_Span_text)

    contactUs_Section.appendChild(contactUs_Span)
    contactUs_Section.onclick = function onclickContactUs() {
        window.location.href = "http://t.me/kksihtk";
    }

    site.appendChild(contactUs_Section)
}

contactUsButtonRender()
