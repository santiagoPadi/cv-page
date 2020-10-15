const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.ts", "./src/**/*.tsx", "./public/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    require("cssnano")({
      preset: "default"
    })
  ]
};
