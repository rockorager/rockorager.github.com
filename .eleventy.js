module.exports = function (eleventyConfig) {
    
    // Passthrough files
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
    

    // Files to convert are in src
    return {
        dir: {
            input: "src"
        },
    };
};


