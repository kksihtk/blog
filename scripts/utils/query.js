var input, filter, articles, article, heading, description, i;
input = document.getElementById('queryInput');
filter = input.value.toLowerCase();
articles = document.querySelectorAll('.blogSpot_article');

function queryArticles() {

    for (i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    for (i = 0; i < articles.length; i++) {
        article = articles[i];
        heading = article.getElementByTagName('h3')[0].textContent.toLowerCase();
        description = article.getElementByTagName('p')[0].textContent.toLowerCase();

        if (heading.indexOf(filter) > -1 || description.indexOf(filter) > -1) {
            article.style.display = '';
            return;
        }
    }
}

function queryCancel() {
    for (i = 0; i < articles.length; i++) {
        articles[i].style.display = '';
    }
}