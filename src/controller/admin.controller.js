const { GetAdmin, updateAdmin } = require("../model/admin.model");
const jwt = require("jsonwebtoken");

exports.GetAdmin = (req, res) => {
  GetAdmin((err, users) => {
    console.log("We are here");
    // if(err) res.send(err);
    // res.send(users)
  });
};

exports.login = async (req, res) => {
  const Admins = await GetAdmin();
  const { email, password } = req.body;
  const CAdmin = Admins.find(
    (admin) =>
      admin.email == req.body.email && admin.password == req.body.password
  );

  if (CAdmin) {
    const token = jwt.sign(
      { id: CAdmin.id, email },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "2h",
      }
    );
    res.json(token);
    updateAdmin(CAdmin.id, token);
  } else {
    res.status(400).send("information incorrect");
  }
};
