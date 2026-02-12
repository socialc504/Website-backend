let express = require("express");
let app = express();

let cors = require("cors");
app.use(cors());
app.use(express.json());

let links = ["Home", "About", "Contact"];

app.get("/nav", (req, res) => {
  res.send({
    logo: "Gourmet au Catering",
    menu: links,
    heroImg: "https://www.w3schools.com/w3images/hamburger.jpg",
    heroText: "Le Catering",
  });
});

app.get("/about", (req, res) => {
  res.send({
    heading: "About Catering",
    aboutImg: "https://www.w3schools.com/w3images/tablesetting2.jpg",
    subHeading: "Tradition since 1889",
    para1:
      "The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.",
    para2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
});

app.get("/menu", (req, res) => {
  res.send({
    heading: "Our Menu",
    dishes: [
      {
        name: "Bread Basket",
        description: "Assortment of fresh baked fruit breads and muffins 5.50",
      },
      {
        name: "Honey Almond Granola with Fruits",
        description:
          "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
      },
      {
        name: "Belgian Waffle",
        description: "Vanilla flavored batter with malted flour 7.50",
      },
      {
        name: "Scrambled eggs",
        description:
          "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
      },
      {
        name: "Blueberry Pancakes",
        description: "With syrup, butter and lots of berries 8.50",
      },
    ],
    menuImg: "https://www.w3schools.com/w3images/tablesetting.jpg",
  });
});

app.get("/contact", (req, res) => {
  res.send({
    heading: "Contact",
    description:
      "We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.",
    address: "Catering Service, 42nd Living St, 43043 New York, NY",
    description1:
      "You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:",
  });
});

let newForm = [];
app.post("/form", (req, res) => {
  let formData = req.body;
  console.log("formData", formData);

  newForm.push(formData);
  res.send(newForm)
});

app.get("/form", (req, res) => {
  res.send(newForm);
});

app.listen("5030", () => {
  console.log("server is running");
});
