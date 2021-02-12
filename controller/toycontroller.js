/*

//For MySQL
const con = require('../configuration/mysql-config');

//For MySQL
exports.getAllToys = (req, res, next) =>{
	 con.query("select * from toy", (err, rows) => {
		 if(err) throw err;
		 res.status(200).json(rows);
	 });
}

//For MySQL
 exports.saveToy = (req, res, next) => {
     const toy_name = req.params.tname;
     const toy_type = req.params.ttype;
     const minage = req.params.minage;
     const maxage = req.params.maxage;
     const price = req.params.price;
     const qty = req.params.qty;
     const rent = req.params.rent;
     var values = [[,"Uno", "Cards", 10, 12, 500, 2, 1000]];
     con.query("insert into toy values ?", [values], (err, result) => {
      if(err) throw err;
      res.status(200).json(result);
   });
 }
 
 //For MySQL
  exports.getToy = (req, res, next) => {
	 const id = req.params.id;
     //res.status(200).json({tid:id});
     con.query(`select * from toy where toy_id=${id}`, (err, rows) => {
        if(err) throw err;
        res.status(200).json(rows);
    });
 }
*/
 //For MongoDB
 const Toy = require('../model/Toy');

exports.getToys = async (req, res, next) => {
      try{
         const toys = await Toy.find();
         console.log(toys);
         res.json(toys);
      }catch(error){
         res.json({msg: error});
      }
 }

 exports.saveToy = async (req, res, next) => {

   const toyName = req.body.toy_name;
   const toyType = req.body.toy_type;
   const minAge = req.body.minage;
   const maxAge = req.body.maxage;
   const toyPrice = req.body.price;
   const qty = req.body.quantity;
   const rent = req.body.rental_amount;

   const toys = new Toy({
      toy_name:toyName,
      toy_type:toyType,
      minage:minAge,
      maxage:maxAge,
      price:toyPrice,
      quantity:qty,
      rental_amount:rent
   });

   try{
      const saveToy = await toys.save();
      console.log(saveToy);
      res.json(saveToy);
   }catch(error){
      res.json({msg: error});
   }
}

exports.getToy = async (req, res, next) => {
   var tname = req.body.name;
   try{
      const toy = await Toy.find({toy_name:tname});
      console.log(toy);
      res.json(toy);
   }catch(error){
      res.json({msg: error});
   }
}

exports.removeToy = async (req, res, next) => {
   var tname = req.body.name;
   try{
      const toy = await Toy.remove({toy_name:tname});
      console.log(toy);
      res.json(toy);
   }catch(error){
      res.json({msg: error});
   }
}

//Not Working - Need Help!
/* exports.updateToy = async (req, res, next) => {
   var tname = req.body.name;
   var ttype = req.body.type;
   try{
      const toy = await Toy.put({toy_name:tname, $set: {toy_type:ttype} });
      console.log(toy);
      res.json(toy);
   }catch(error){
      res.json({msg: error});
   }
} */