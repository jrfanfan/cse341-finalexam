const dashboardCon = (req, res) => {
  res.render('../views/dashboard.hbs');
}

const dataCon = (req, res) => {
  res.render('./data.hbs');
}

const inputCon = (req, res) => {
    res.render('./input.hbs');
}

const updateDataById = (req, res) => {
    res.render('./update.hbs');
}

const deleteDataById = (req, res) => {
  res.render('./delete.hbs');
}


module.exports = { dashboardCon, dataCon, inputCon, updateDataById, deleteDataById}
