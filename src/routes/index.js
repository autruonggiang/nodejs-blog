const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // Local host --- hosting

    // Action ---> Dispatcher ---> Function handler
}

module.exports = route;