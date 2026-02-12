const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const links = ["Home", "About", "Contact"];

app.get("/nav", (req, res) => {
  res.json({
    logo: "Gourmet au Catering",
    menu: links,
    heroImg: "https://www.w3schools.com/w3images/hamburger.jpg",
    heroText: "Le Catering",
  });
});

app.get("/about", (req, res) => {
  res.json({
    heading: "About Catering",
    aboutImg: "https://www.w3schools.com/w3images/tablesetting2.jpg",
    subHeading: "Tradition since 1889",
    para1:
      "The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet...",
    para2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
  });
});

app.get("/menu", (req, res) => {
  res.json({
    heading: "Our Menu",
    dishes: [
      { name: "Bread Basket", description: "Assortment of fresh baked fruit breads and muffins 5.50" },
      { name: "Honey Almond Granola with Fruits", description: "Natural cereal of honey toasted oats 7.00" },
      { name: "Belgian Waffle", description: "Vanilla flavored batter with malted flour 7.50" },
      { name: "Scrambled eggs", description: "Scrambled eggs with green onions 7.50" },
      { name: "Blueberry Pancakes", description: "With syrup, butter and lots of berries 8.50" }
    ],
    menuImg: "https://www.w3schools.com/w3images/tablesetting.jpg",
  });
});

const newForm = [];

app.post("/form", (req, res) => {
  newForm.push(req.body);
  res.json(newForm);
});

app.get("/form", (req, res) => {
  res.json(newForm);
});

const PORT = process.env.PORT || 5030;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
