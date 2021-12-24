const express = require("express");
const router = express.Router();
const {
  GetAdminCentre,
  getAdminByID,
  CreateAdmin,
  DeleteAdminByID,
  UpdateAdminCentre,
  UpdatePassword,
  login,
} = require("../controller/admin_centre_controller");

router.get("/", GetAdminCentre);
router.post("/login", login);
router.get("/:id", getAdminByID);
router.post("/create", CreateAdmin);
router.delete("/delete/:id", DeleteAdminByID);
router.put("/update/:id", UpdateAdminCentre);
router.put("/updatePassword/:id", UpdatePassword);

module.exports = router;
