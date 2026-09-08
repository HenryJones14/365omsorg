module.exports = function (eleventyConfig) {

    eleventyConfig.addGlobalData("buildYear", new Date().getFullYear());

    //eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addCollection("nav", function (collectionApi) {
        return collectionApi
            .getAll()
            .filter(function (page) {
                return page.data.nav === true;
            })
            .sort(function (a, b) {
                return (a.data.navOrder || 0) - (b.data.navOrder || 0);
            });
    });

    eleventyConfig.addPassthroughCopy({
        "css": "css"
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};