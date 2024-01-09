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
	  console.log("TEST");
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

app.post('/cattest', (req, res) => {
    res.send("POST Request Called")
});

/* Get a specific employee */
app.post('new/:id/:cd', async (req, res, next) => {
  try {
    const { id, cd } = req.params;
	  console.log("TEST");
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

/* Get a specific employee */
app.get('/test2/:id/:cd', async (req, res, next) => {
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
  konkurs: true,
  avvikles: true
});
  } catch (error) {
    next(error);
  }
});

/* Get a specific employee */
app.get('/test3/:id/:cd', async (req, res, next) => {
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
	firmanavn: 'SPORVEIEN AS',
	postadresse: {
		adresse: [
			'Postboks 2857 , TOYEN'
		],
		postnummer: 0608,
		poststed: 'OSLO'
	},
	forretningsadresse: {
		adresse: [
			'Okernveien 9'
		],
		postnummer: 0653,
		poststed: 'OSLO'
	},
	konkurs: false,
	avvikles: false
});
  } catch (error) {
    next(error);
  }
});

/* Get a specific employee */
app.get('/test4/:id/:cd', async (req, res, next) => {
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
	firmanavn: 'SPORVEIEN AS',
	postadresse: {
		adresse: [
			'Postboks 2857 , TOYEN'
		],
		postnummer: 0608,
		poststed: 'OSLO'
	},
	forretningsadresse: {
		adresse: [
			'Okernveien 9'
		],
		postnummer: 0653,
		poststed: 'OSLO'
	},
	konkurs: true,
	avvikles: true
});
  } catch (error) {
    next(error);
  }
});

/* Get a specific employee */
app.get('/test5/:id/:cd', async (req, res, next) => {
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
	firmanavn: 'SPORVEIEN AS',
	postadresse: {
		adresse: [
			'Postboks 2857 , TØYEN'
		],
		postnummer: 0608,
		poststed: 'OSLO'
	},
	forretningsadresse: {
		adresse: [
			'Økernveien 9'
		],
		postnummer: 0653,
		poststed: 'OSLO'
	},
	konkurs: false,
	avvikles: false
});
  } catch (error) {
    next(error);
  }
});


/* Get a specific employee */
app.get('/test6/:id/:cd', async (req, res, next) => {
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
	firmanavn: 'SPORVEIEN AS',
	postadresse: {
		adresse: [
			'Postboks 2857 , TØYEN',
			'Postboks 6197 Etterstand',
			'Test 3rd Line'
		],
		postnummer: 0608,
		poststed: 'OSLO'
	},
	forretningsadresse: {
		adresse: [
			'Økernveien 9'
		],
		postnummer: 0653,
		poststed: 'OSLO'
	},
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
