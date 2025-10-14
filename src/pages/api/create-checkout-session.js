// export const prerender = false;
// import Stripe from "stripe";

// const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);


// export async function post({ request }) {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "Uganda Adventure Tour",
//               description: "Book your guided eco-tour through Uganda!",
//             },
//             unit_amount: 120000, // $1200.00 (in cents)
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:4321/uganda-travel-service/payment-success",
//       cancel_url: "http://localhost:4321/uganda-travel-service/payment-fail",
//     });

//     console.log("Stripe key loaded:", import.meta.env.STRIPE_SECRET_KEY ? "✅ Yes" : "❌ No");


//     return new Response(JSON.stringify({ url: session.url }), { status: 200, headers: {"Content-Type": "application/json"} });
//   } catch (err) {
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }
