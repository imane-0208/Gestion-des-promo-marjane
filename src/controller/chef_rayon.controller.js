const { 
    GetChefRayon,
    GetChefRayonById,
    AddNewChefRayon,
    DeleteChefRayon,
    updateChefRayon ,
    UpdatePassword
} = require('../model/chef_rayon.model');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

exports.GetChefRayon = (req, res)=> {
    GetChefRayon((err, admin_centre) =>{
        if(err) res.send(err);
        res.send(admin_centre)
    })
};


exports.getChefByID = (req, res)=>{
    GetChefRayonById(req.params.id)
}

exports.login = async(req, res)=> {
    const Chef_rayon = await GetChefRayon();
    const { email, password } = req.body;
    const CRayon = Chef_rayon.find(
      (Crayon) =>
      Crayon.email == req.body.email && Crayon.password == req.body.password
    );

    if (CRayon) {
      const token = jwt.sign(
        { id: CRayon.id, email },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );
      res.json(token);
    //   updateAdmin( CAdmin.id,token);
    }else{
      res.status(400).send("information incorrect");
    }
};


exports.CreateChefRayon =(req,res)=>{
    AddNewChefRayon(req.body.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.id_admin_centre,req.body.rayon);
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testcoding975@gmail.com',
          pass: 'testCoding1998'
        }
      });
      
      var mailOptions = {
        from: 'testcoding975@gmail.com',
        to: req.body.email,
        subject: 'mode de passe pour access au site',
        text: req.body.password
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email envoyer');
        }
      });
}

exports.DeleteChefRayonByID = (req, res)=>{
    DeleteChefRayon(req.params.id, (err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdateChefRayon = (req,res)=>{
    updateChefRayon(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.pays,req.body.ville,req.body.id_admin_centre,req.body.rayon,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}

exports.UpdatePassword = (req,res)=>{
    UpdatePassword(req.params.id,req.body.password,(err, admin_centre)=>{
        if(err)
        res.send(err);
        res.send(admin_centre);
    })
}