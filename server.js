const express = require("express");
const app = express();
const PORT = 8020;
const pixelRoute = require("./routes/pixel");
const companyRoute = require("./routes/company");
require('dotenv').config()
const YOUR_DOMAIN = 'http://localhost:3000';
const API_KEY = process.env.REACT_APP_API_KEY;
const cors = require("cors");
const stripe = require('stripe')(API_KEY);



app.use(cors());
app.use(express.json());

// Create routes for pixels
app.use("/pixel", pixelRoute);

// Create routes for companies
app.use("/company", companyRoute );

//Creates stripe checkout session
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1LGLJYLAihRf5R9ssixCRFTk',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

