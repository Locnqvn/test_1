let routes = [];

const context = require.context(".", true, /routeAd.js$/);
context.keys().forEach((path) => {
    const result = context(`${path}`).default;
    if(Array.isArray(result)){
        result.map(route => {
            routes.push(route);
        })
    }
    else
        routes.push(result);
});

export default routes;