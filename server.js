const express = require("express");
const hbs = require("hbs");

const app = express();


hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    var now = new Date().toDateString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

hbs.registerHelper("year", () => {
    return new Date().getFullYear();
});

app.use((req, res, next) => {
    res.render("construction");
});


app.get("/", (request, response) => {
    // response.send("<h1>Hello Express</h1>");

    response.render("index.hbs", {
        headerTitle: "home page".toUpperCase()
    });

});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        headerTitle: "About Page".toUpperCase()
    });
});

app.get("/bad", (req, res) => {
    res.send({
        errorMessage: "page not found"
    });
});

app.listen(3000);