# Setup Instructions for Roots2Global E-Commerce Website

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- A Stripe account (for payment processing)

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Stripe keys:

```env
# Stripe Keys (Get these from https://dashboard.stripe.com/test/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_CURRENCY=USD

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Get Stripe API Keys

1. Go to https://stripe.com and create an account (if you don't have one)
2. Navigate to the Dashboard → Developers → API keys
3. Copy your **Publishable key** (starts with `pk_test_`)
4. Copy your **Secret key** (starts with `sk_test_`)
5. Add them to your `.env.local` file

**Important:** Use test keys during development. For production, you'll need live keys.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Test the Website

- Browse products on the homepage
- View product details
- Add items to cart
- Proceed to checkout
- Test payment with Stripe test card: `4242 4242 4242 4242`
  - Use any future expiry date
  - Use any 3-digit CVC
  - Use any ZIP code

## Testing Payments

### Stripe Test Cards

Use these test card numbers for testing:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

For more test cards, visit: https://stripe.com/docs/testing

## Building for Production

```bash
npm run build
npm start
```

## Deployment Checklist

Before deploying:

1. ✅ Replace Stripe test keys with live keys
2. ✅ Update `NEXT_PUBLIC_SITE_URL` with your production URL
3. ✅ Test all payment flows
4. ✅ Update contact information
5. ✅ Add real product images
6. ✅ Configure shipping rates
7. ✅ Set up email notifications
8. ✅ Add analytics (optional)
9. ✅ Configure domain and SSL
10. ✅ Set up error monitoring

## Project Structure

```
roots2global/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (Stripe integration)
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout page
│   └── ...
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                   # Utilities
│   ├── store.ts          # Zustand cart store
│   └── stripe.ts         # Stripe configuration
├── data/                  # Product data
│   └── products.ts
├── types/                 # TypeScript types
│   └── index.ts
└── public/                # Static assets
```

## Troubleshooting

### Payment not working?
- Check that Stripe keys are correctly set in `.env.local`
- Ensure you're using test keys with test card numbers
- Check browser console for errors
- Verify API route is accessible

### Images not loading?
- Check that image URLs in `data/products.ts` are valid
- Update `next.config.js` with correct image domains

### Build errors?
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Support

For issues or questions:
- Check the FAQ page: `/faq`
- Contact support: `/contact`
- Review documentation: `README.md`

