// Add Express
const express = require("express");
// Initialize Express
const app = express();
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

/* Get a specific employee */
app.get('/:id/:cd', async (req, res, next) => {
  try {
    const { id, cd } = req.params;
/*     const employee = await employees.findOne({
      _id: id,
    });

    if (!employee) {
      const error = new Error('Employee does not exist');
      return next(error);
    } */

    res.json({
  id: id,
  organisasjonsnummer: cd,
  firmanavn: '- Test Supplier Name',
  adresse: [
    'sStorgaten 120'
  ],
  postnummer: 3060,
  poststed: 'SVELVIK',
  konkurs: false,
  avvikles: false
});
  } catch (error) {
    next(error);
  }
});


// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;