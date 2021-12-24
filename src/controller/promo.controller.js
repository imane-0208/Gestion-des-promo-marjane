const {
  GetPromo,
  AddPromo,
  DeletePromo,
  updatePromo,
  UpdateStatus,
} = require("../model/promo.model");
const { GetChefRayonById} = require('../model/chef_rayon.model');

exports.GetPromo = (req, res) => {
  GetPromo((err, admin_centre) => {
    if (err) res.send(err);
    res.send(admin_centre);
  });
};

exports.CreatePromo = async(req, res) => {
  const Nom_de_rayon =await GetChefRayonById(req.body.id_chef_rayon);

  // promo ne doit pas dépasser 50% du prix du produit 
  // Chaque 5% de réduction vaut 50dhs de points de fidélité gagnés
  // La promotion des produits multimédia ne doit pas dépasser 20%

  let calcule_fidelite= (req.body.pourcentage /5 ) * 50;
  Nom_de_rayon.forEach(element => {
      if(element.rayon == "IT" && req.body.pourcentage <= 20 || element.rayon !== "IT" && req.body.pourcentage <= 50){
        AddPromo(
          req.body.id,
          req.body.centre,
          req.body.pourcentage,
          req.body.id_produit,
          req.body.id_chef_rayon,
          calcule_fidelite,
          (err, admin_centre) => {
            if (err) res.send(err);
          }
        );
      }else {
        console.log('les informations incorrectes');
      }
  });

};

exports.DeletePromoByID = (req, res) => {
  DeletePromo(req.params.id, (err, admin_centre) => {
    if (err) res.send(err);
    res.send(admin_centre);
  });
};

exports.UpdatePromo = (req, res) => {
  updatePromo(
    req.params.id,
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.pays,
    req.body.ville,
    req.body.password,
    (err, admin_centre) => {
      if (err) res.send(err);
      res.send(admin_centre);
    }
  );
};

exports.UpdateStatus = (req, res) => {
  console.log();
  let date = new Date();
  let horaire = date.getHours();

  if (horaire > 17 || horaire < 8) {
    res.json("la promo est non traité");
  } else {
    UpdateStatus(req.body.id, req.body.status);
  }
};
