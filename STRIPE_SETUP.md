# Stripe API Key Setup Guide

## 🔴 Common Error: "Invalid API Key provided"

If you're seeing this error, follow these steps to fix it:

## Step 1: Check Your .env.local File

Make sure you have a `.env.local` file in the root directory with your Stripe keys:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_CURRENCY=usd
```

## Step 2: Get Your Stripe API Keys

1. **Create/Login to Stripe Account**
   - Go to https://stripe.com
   - Sign up or log in to your account

2. **Navigate to API Keys**
   - Go to Dashboard → Developers → API keys
   - Or visit: https://dashboard.stripe.com/test/apikeys

3. **Copy Your Keys**
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`) - Click "Reveal" to see it

## Step 3: Add Keys to .env.local

1. **Create .env.local file** (if it doesn't exist):
   ```bash
   cp .env.example .env.local
   ```

2. **Open .env.local** and replace the placeholder values:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
   STRIPE_SECRET_KEY=sk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
   ```

3. **Important Notes:**
   - ✅ Copy the COMPLETE key (they're long, usually 100+ characters)
   - ✅ Don't add quotes around the key
   - ✅ Don't add spaces before or after the `=`
   - ✅ Make sure there are no extra characters
   - ✅ Use test keys (`sk_test_` and `pk_test_`) for development

## Step 4: Restart Your Development Server

After updating `.env.local`, you MUST restart the server:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

**Important:** Next.js only reads environment variables on startup, so changes require a restart.

## Step 5: Verify Your Keys

### Check Key Format:
- ✅ Publishable key should start with: `pk_test_` or `pk_live_`
- ✅ Secret key should start with: `sk_test_` or `sk_live_`
- ✅ Keys are usually 100+ characters long

### Common Mistakes:
- ❌ Using incomplete keys (missing characters at the end)
- ❌ Adding quotes: `STRIPE_SECRET_KEY="sk_test_..."`
- ❌ Adding spaces: `STRIPE_SECRET_KEY = sk_test_...`
- ❌ Using wrong key type (using publishable key as secret key)
- ❌ Not restarting the server after changes

## Step 6: Test Your Setup

1. **Add items to cart**
2. **Go to checkout**
3. **Select "Credit/Debit Card" payment**
4. **Use test card:** `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/25)
   - CVC: Any 3 digits (e.g., 123)
   - ZIP: Any 5 digits (e.g., 12345)

## Troubleshooting

### Error: "Invalid API Key provided"
- ✅ Check that your key starts with `sk_test_` or `sk_live_`
- ✅ Verify you copied the complete key (no truncation)
- ✅ Make sure there are no extra spaces or quotes
- ✅ Restart your development server

### Error: "No such payment_intent"
- This is usually a different issue, not related to API keys

### Error: "You must provide a Stripe API key"
- ✅ Check that `.env.local` exists in the root directory
- ✅ Verify the variable name is exactly `STRIPE_SECRET_KEY`
- ✅ Restart your development server

### Still Not Working?

1. **Check the browser console** for client-side errors
2. **Check the terminal** where `npm run dev` is running for server errors
3. **Verify your Stripe account** is active and in test mode
4. **Try generating new API keys** from Stripe dashboard

## Test Cards

Use these test card numbers:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

More test cards: https://stripe.com/docs/testing

## Production Keys

When deploying to production:
1. Switch to **Live mode** in Stripe dashboard
2. Get **live keys** (start with `sk_live_` and `pk_live_`)
3. Update `.env.local` with live keys
4. **Never** commit `.env.local` to git (it's in `.gitignore`)

## Need Help?

- Stripe Documentation: https://stripe.com/docs
- Stripe Support: https://support.stripe.com
- Check SETUP.md for general setup instructions

