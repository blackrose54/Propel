export async function POST(req: Request) {
  const { name, amt } = await req.json();
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create(
    {
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name,
            },
            unit_amount: amt,  
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: 5,
      },
      mode: "payment",
      success_url: "https://wondrous-equally-viper.ngrok-free.app/api/webhook",
    },
    {
      stripeAccount: "",
    }
  );
  console.log(session);
  return Response.json({ success: true });
}
