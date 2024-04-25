var express = require("express");
var router = express.Router();
const orderController = require("../controllers/AlbumController");

// Root/Index Routes
router.get("/", function (req, res, next) {
  res.json({
    message: "Implantação efetuada com sucesso. Bom trabalho! ",
  });
});

// get albums
router.get("/albums", orderController.index);

module.exports = router;
