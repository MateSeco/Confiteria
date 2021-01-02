module.exports = function routes(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
};
