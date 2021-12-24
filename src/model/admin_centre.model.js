const dbConn = require("../../db/connDb");

exports.GetAdminCentre = () => {
  return new Promise((resolve, reject) => {
    dbConn.query("SELECT * FROM admin_centre", (err, res) => {
      resolve(res);
    });
  });
};

//get admin centre by id
exports.GetAdminCentreById = (id, result) => {
  dbConn.query("SELECT * FROM admin_centre WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching utisateur by id", err);
      result(err);
    } else {
      console.log("admin centre fetched successfully");
      result(res);
    }
  });
};

//add new admin centre
exports.AddNewAdminCentre = (id, nom, prenom, email, pays, ville, password) => {
  dbConn.query(
    `INSERT INTO admin_centre (id,nom,prenom,email,pays,ville,password) VALUES (${id},"${nom}","${prenom}","${email}","${pays}","${ville}",${password})`,
    (err, res) => {
      if (err) {
        console.log(err);
        // result(err);
      } else {
        console.log("admin centre insered successfully");
      }
    }
  );
};

//delete admin centre by id
exports.DeleteAdminCentre = (id) => {
  // console.log(id);
  dbConn.query(`DELETE FROM admin_centre WHERE id=${id}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("admin centre deleted successfully");
    }
  });
};

exports.updateAdminCentre = (id, nom, prenom, email, pays, ville, password) => {
  // console.log(id,nom,prenom,email,pays,ville);
  dbConn.query(
    `UPDATE admin_centre SET id=${id}, nom="${nom}",prenom="${prenom}",email="${email}",pays="${pays}",ville="${ville}",password="${password}" WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("admin centre updated successfully");
      }
    }
  );
};

exports.UpdatePassword = (id, password) => {
  // console.log(id, password);
  dbConn.query(
    `UPDATE admin_centre SET password="${password}" WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("admin password updated successfully");
      }
    }
  );
};
