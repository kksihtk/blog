function blogSpot_articleAdd(articleTitle = "none", articleDescription = "none", articleLink = "#", articleId) {
    let blogspot = document.getElementById('blogSpot');

    let blogSpot_article = document.createElement("div");
    blogSpot_article.classList.add("blogSpot_article");
    blogSpot_article.id = articleId;

    let blogSpot_article_heading = document.createElement("div");
    blogSpot_article_heading.classList.add("blogSpot_article-heading");

    let blogSpot_article_heading_h3 = document.createElement("h3");
    let h3Text = document.createTextNode(articleTitle);
    blogSpot_article_heading_h3.appendChild(h3Text);

    let blogSpot_article_description = document.createElement("div");
    blogSpot_article_description.classList.add("blogSpot_article-description");

    let blogSpot_article_description_p = document.createElement("p");
    let pText = document.createTextNode(articleDescription);
    blogSpot_article_description_p.appendChild(pText);

    let blogSpot_article_description_p_a = document.createElement("a");
    let aText = document.createTextNode("... подробнее");
    blogSpot_article_description_p_a.href = articleLink;
    blogSpot_article_description_p_a.appendChild(aText);

    blogSpot_article_description.appendChild(blogSpot_article_description_p);
    blogSpot_article_description_p.appendChild(blogSpot_article_description_p_a);
    blogSpot_article_heading.appendChild(blogSpot_article_heading_h3);
    blogSpot_article.appendChild(blogSpot_article_heading);
    blogSpot_article.appendChild(blogSpot_article_description);


    console.log(blogSpot_article);

    blogspot.prepend(blogSpot_article);
}

function blogSpot_articleRemove(artID) {
    if (artID == null || typeof artID != 'string') {
        console.log("Id needed (art{artNum} example: art1)")
        return;
    } else {
    document.getElementById(artID).remove()
    } 
}

blogSpot_articleRemove("art0")

let blogList = {
    article1: {
        articleTitle: "Тысяча лет без релиза",
        articleDescription: "История того, как долго я делаю этот сайт",
        articleLink: "./articles/article1.html", 
        articleId: "art1"
    },
    article2: {
        articleTitle: "На новом дыхании",
        articleDescription: "Увеличилась мотивэйшн для продолжения разработка данного сайта, я даже планирую php",
        articleLink: "./articles/article2.html", 
        articleId: "art2"
    },
    article3: {
        articleTitle: "Мне лень деплоить апдейт",
        articleDescription: "Я почти не умею работать с гитхабом, чтобы бранч сам себя обновлял :<",
        articleLink: "./articles/article3.html", 
        articleId: "art3"
    }
};

function blogRender() {
    for (item in blogList) {
        blogSpot_articleAdd(blogList[item].articleTitle, blogList[item].articleDescription, blogList[item].articleLink, blogList[item].articleId);
    }
}

blogRender()

function blogspot_showFullArticle() {
    
}