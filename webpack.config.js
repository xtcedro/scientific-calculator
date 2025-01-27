const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your app
  output: {
    path: path.resolve(__dirname, "build"), // Output directory
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JS and JSX files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve file extensions
  },
  devServer: {
    static: path.resolve(__dirname, "public"), // Serve static files
    port: 3000, // Development server port
  },
};