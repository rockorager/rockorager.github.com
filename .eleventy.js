module.exports = function (eleventyConfig) {
    
    // Passthrough files
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
    
    // Filters
    eleventyConfig.addFilter("where", function(arr, key, value){
        return arr.filter(function (item) {
            console.log(item[key]);
            console.log(value);
            return (item[key] === value);
            });
    });

    // Collections
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").reverse();
      });
    eleventyConfig.addCollection("articles", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").filter(function (post) {
            return (post.data.type === "article");
            });
        });

    // Files to convert are in src
    return {
        dir: {
            input: "src"
        },
    };
};


