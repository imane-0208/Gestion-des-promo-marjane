const express = require("express");
const router = express.Router();

const {
  GetChefRayon,
  getChefByID,
  CreateChefRayon,
  DeleteChefRayonByID,
  UpdateChefRayon,
  UpdatePassword,
  login,
} = require("../controller/chef_rayon.controller");

router.get("/", GetChefRayon);
router.get("/:id", getChefByID);
router.post("/create", CreateChefRayon);
router.post("/login", login);
router.delete("/delete/:id", DeleteChefRayonByID);
router.put("/update/:id", UpdateChefRayon);
router.put("/updatePassword/:id", UpdatePassword);

module.exports = router;
