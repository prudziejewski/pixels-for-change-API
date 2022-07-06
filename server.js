const express = require("express");
const app = express();
const PORT = 8020;
const pixelRoute = require("./routes/pixel");
const companyRoute = require("./routes/company");
require('dotenv').config()
// const loginRoute = require("./routes/login");
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


// app.use("/login", loginRoute);





const users = [];
console.log(users)

app.post("/signup", (req, res) => {
users.push(req.body)
res.json({ success: true });
})



 
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
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


//    // if (req.method === "POST") {
//     //     try {
//     //         const { amount } = req.body;

        
//     //     }
//     // }
    
//     const paymentIntent = await stripe.paymentIntents.create({
//         name: "One Pixel",
//         amount: 100,
//         currency: 'cad',
//         payment_method_types: ['card'],
//       });

    
//       res.json({client_secret: paymentIntent.client_secret});
    
//   });