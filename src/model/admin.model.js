const dbConn = require("../../db/connDb");

exports.GetAdmin = () => {
  return new Promise((resolve, reject) => {
    dbConn.query("SELECT * FROM admin", (err, res) => {
      resolve(res);
      // console.log(res);
    });
  });
};

exports.updateAdmin = (id, token) => {
  dbConn.query(
    `UPDATE admin SET token="${token}" WHERE id=${id}`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("token updated successfully");
      }
    }
  );
};
