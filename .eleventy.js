module.exports = function (eleventyConfig) {
    
    // Passthrough files
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
    
    // Filters
    eleventyConfig.addFilter("where", function(arr, key, value){
        return arr.filter(function (item) {
            return (item[key] === value);
            });
    });
    eleventyConfig.addFilter("pluralize", function(value){
        switch (value){
            case "reply": return "replies";
            case "article": return "articles";
            case "bookmark": return "bookmarks";
            default: return value+"s";
        };
    });

    // Collections
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").reverse();
      });
    eleventyConfig.addCollection("articles", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").filter(function (post) {
            return (post.data.type === "article");
            }).reverse();
        });
    eleventyConfig.addCollection("bookmarks", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").filter(function (post) {
            return (post.data.type === "bookmarks");
            }).reverse();
        });
    eleventyConfig.addCollection("notes", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").filter(function (post) {
            return (post.data.type === "note");
            }).reverse();
        });
    eleventyConfig.addCollection("replies", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").filter(function (post) {
            return (post.data.type === "reply");
            }).reverse();
        });
    eleventyConfig.addCollection("reposts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*").filter(function (post) {
            return (post.data.type === "repost");
            }).reverse();
        });

    // Files to convert are in src
    return {
        dir: {
            input: "src"
        },
    };
};


