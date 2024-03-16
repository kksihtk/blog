function scrollButtonRender() {
    site = document.getElementById("site")

    scrollButton_Section = document.createElement("section")
    scrollButton_Section.id = "scrollToTopButton"

    scrollButton_Span_text = document.createTextNode("Наверх")
    scrollButton_Span = document.createElement("span")
    scrollButton_Span.appendChild(scrollButton_Span_text)

    scrollButton_Section.appendChild(scrollButton_Span)

    scrollButton_Section.onclick = function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    site.appendChild(scrollButton_Section)
}

scrollButtonRender()