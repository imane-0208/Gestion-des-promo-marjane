const express = require("express");
const router = express.Router();

const {
  GetPromo,
  CreatePromo,
  DeletePromoByID,
  UpdatePromo,
  UpdateStatus,
} = require("../controller/promo.controller");

router.get("/", GetPromo);
// router.get('/:id', getPromoByID);
router.post("/create", CreatePromo);
router.delete("/delete/:id", DeletePromoByID);
router.put("/update/:id", UpdatePromo);
router.put("/updateStatus/:id", UpdateStatus);

module.exports = router;