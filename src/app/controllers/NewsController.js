
class NewsController {

    // [GET] /news
    index(red, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(red, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController;