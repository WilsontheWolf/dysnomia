// BigInt JSON serialization.
// JSDoc by default will fail when BigInts are used within the codebase
// https://github.com/jsdoc/jsdoc/issues/1918
BigInt.prototype.toJSON = function() {
    return this.toString() + "n";
};

module.exports = {
    source: {
        include: ["lib", "README.md"],
        includePattern: ".js$",
        excludePattern: "(node_modules/|docs)"
    },
    plugins: ["plugins/markdown"],
    opts: {
        encoding: "utf8",
        readme: "./README.md",
        destination: "docs/",
        recurse: true,
        verbose: true,
        template: "./node_modules/clean-jsdoc-theme",
        theme_opts: {
            default_theme: "dark",
            homepageTitle: "Project Dysnomia Docs",
            title: "Project Dysnomia",
            menu: [
                {
                    title: "GitHub",
                    link: "https://github.com/projectdysnomia/dysnomia/",
                    target: "_blank"
                }
            ]
        },
    },
    markdown: {
        hardwrap: false,
        idInHeadings: true
        // This is important for clean-jsdoc-theme, otherwise some features might not work.
    }
};
