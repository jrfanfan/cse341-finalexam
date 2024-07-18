const dataModels = require('../models/dataModels');


// Add data
const postData = async (req, res) => {
    try {
      const data = await dataModels.create(req.body)
      data;
      res.redirect('/input.hbs');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
}

//Get data 
const findData = async (req, res) => {
  try {
    const data = await dataModels.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: error.message})
  }

}

//Get data by id
const findDataById = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await dataModels.findById(id);
    res.json(data);
  }catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }

}
//Update data by id
const findByIdAndUpdate = async (req, res) => {
  const {firstname, lastname, email, idnumber} = req.body;
  try {
    const {id} = req.params
    const data = await dataModels.findByIdAndUpdate(id, {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'idnumber': idnumber
    });
    data;
    res.redirect('/update.hbs');
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
}

// Delete data by id
const deleteDataById = async (req, res) => {
  try {
    const {id} = req.params;
    data = await dataModels.findByIdAndDelete(id);
    //res.status(200).json('This name: ' + data.firstname + " " +  data.lastname + " had removed from the databases");
    data;
    res.redirect('/update.hbs');
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
}


module.exports = {postData, findData, findDataById, findByIdAndUpdate, deleteDataById}    