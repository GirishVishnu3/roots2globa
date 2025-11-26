# MongoDB Complete Setup & Testing Guide
## Everything You Need to Connect and Test Your Database

This guide covers all requirements, setup steps, testing procedures, and verification for MongoDB Atlas integration.

---

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] MongoDB Atlas account created
- [ ] Cluster created and running (free tier M0 is fine)
- [ ] Node.js 18+ installed
- [ ] npm installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Access to your MongoDB Atlas dashboard

---

## 🔧 Part 1: MongoDB Atlas Configuration

### Step 1.1: Create Database User

1. **Go to MongoDB Atlas Dashboard**
   - Visit: https://cloud.mongodb.com
   - Log in to your account
   - Navigate to your cluster

2. **Create Database User**
   - Click **"Database Access"** (left sidebar)
   - Click **"Add New Database User"**
   - **Authentication Method:** Password
   - **Username:** `roots2global` (or your preferred name)
   - **Password:** 
     - Click **"Autogenerate Secure Password"** OR
     - Create your own strong password
   - **⚠️ IMPORTANT:** Save the password securely! You'll need it for the connection string.
   - **Database User Privileges:** 
     - Select **"Read and write to any database"**
     - OR **"Atlas admin"** (for full access)
   - Click **"Add User"**

3. **Verify User Created**
   - You should see your user in the Database Access list
   - Status should show as "Active"

---

### Step 1.2: Configure Network Access

1. **Go to Network Access**
   - Click **"Network Access"** (left sidebar)
   - Click **"Add IP Address"**

2. **Allow Access**
   - For development and cloud deployment: Click **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` (all IP addresses)
   - **Note:** For production, you can restrict to specific IPs later
   - Click **"Confirm"**

3. **Wait for Activation**
   - Network access changes take 1-2 minutes to activate
   - Status will change from "Pending" to "Active"

4. **Verify Network Access**
   - You should see `0.0.0.0/0` in your IP Access List
   - Status: "Active"

---

### Step 1.3: Get Connection String

1. **Navigate to Clusters**
   - Click **"Clusters"** (left sidebar)
   - Find your cluster (usually named "Cluster0")

2. **Get Connection String**
   - Click **"Connect"** button on your cluster
   - Select **"Connect your application"**
   - Choose:
     - **Driver:** Node.js
     - **Version:** 5.5 or later
   - Copy the connection string (looks like):
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```

3. **Format Connection String**
   - Replace `<username>` with your database username
   - Replace `<password>` with your database password
   - Add database name: `/roots2global` before the `?`
   - Final format:
     ```
     mongodb+srv://roots2global:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/roots2global?retryWrites=true&w=majority
     ```

**⚠️ Important:** If your password contains special characters, URL encode them:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- `%` becomes `%25`
- etc.

---

## 💻 Part 2: Local Development Setup

### Step 2.1: Create Environment File

1. **Create `.env.local` file** in project root:
   ```bash
   touch .env.local
   ```

2. **Add MongoDB Connection String**
   ```env
   # MongoDB Connection String
   MONGODB_URI=mongodb+srv://roots2global:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/roots2global?retryWrites=true&w=majority
   
   # Encryption Key (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
   NEXT_PUBLIC_ENCRYPTION_KEY=your-32-character-encryption-key-here
   
   # Stripe Keys (for testing)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   NEXT_PUBLIC_STRIPE_CURRENCY=USD
   
   # Site URL (local development)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Generate Encryption Key** (if needed):
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Copy the output and paste it as `NEXT_PUBLIC_ENCRYPTION_KEY`

---

### Step 2.2: Verify Environment File

1. **Check file exists:**
   ```bash
   ls -la .env.local
   ```

2. **Verify format** (no spaces around `=`):
   ```env
   MONGODB_URI=mongodb+srv://...
   ```
   ✅ Correct
   ```env
   MONGODB_URI = mongodb+srv://...
   ```
   ❌ Wrong (spaces will cause issues)

3. **Ensure file is in `.gitignore`** (should already be):
   ```bash
   grep .env.local .gitignore
   ```

---

## 🧪 Part 3: Testing Database Connection

### Step 3.1: Test Connection Script

1. **Run the test script:**
   ```bash
   npm run test:db
   ```

2. **Expected Output (Success):**
   ```
   🔍 Testing MongoDB Connection...
   📡 Connection String: mongodb+srv://roots2global:***@cluster0.xxxxx.mongodb.net/roots2global?retryWrites=true&w=majority
   ⏳ Connecting to MongoDB Atlas...
   ✅ Successfully connected to MongoDB!
      Database: roots2global
      Host: cluster0.xxxxx.mongodb.net
   🧪 Testing database operations...
   📊 Existing Collections (0):
      (No collections yet - they will be created automatically)
   ✅ Write test: PASSED
   ✅ Read test: PASSED
   ✅ Cleanup: PASSED
   🎉 All tests passed! Your MongoDB connection is working correctly.
   👋 Disconnected from MongoDB.
   ```

3. **If Test Fails:**
   - Check error message
   - See troubleshooting section below
   - Verify all steps in Part 1 are completed

---

### Step 3.2: Test via Application

1. **Start Development Server:**
   ```bash
   npm run dev
   ```

2. **Test User Registration:**
   - Go to http://localhost:3000/register
   - Create a test account
   - Check MongoDB Atlas → Browse Collections → `users`
   - You should see your new user document

3. **Test Product Operations:**
   - Go to http://localhost:3000/products
   - Products should load (if using database)
   - Check MongoDB Atlas → `products` collection

4. **Test Order Creation:**
   - Add products to cart
   - Complete checkout
   - Check MongoDB Atlas → `orders` collection

---

## ✅ Part 4: Verification Checklist

### Database Connection Verification

- [ ] Connection test script passes (`npm run test:db`)
- [ ] No errors in terminal when starting dev server
- [ ] Can see collections in MongoDB Atlas dashboard
- [ ] User registration creates document in `users` collection
- [ ] Orders are saved to `orders` collection
- [ ] Products are accessible from database

### Environment Variables Verification

- [ ] `.env.local` file exists
- [ ] `MONGODB_URI` is set correctly
- [ ] Connection string includes database name (`/roots2global`)
- [ ] Password is URL-encoded if it has special characters
- [ ] No spaces around `=` in `.env.local`

### MongoDB Atlas Verification

- [ ] Database user is created and active
- [ ] Network access allows `0.0.0.0/0` (or your IP)
- [ ] Cluster is running (not paused)
- [ ] Connection string is correct format

---

## 🌐 Part 5: Deployment Platform Setup

### Step 5.1: Add Environment Variable in Your Deployment Platform

1. **Go to your deployment platform dashboard** (Vercel, Railway, Render, etc.)
   - Select your project/service
   - Navigate to **Environment Variables** or **Config**

2. **Add MONGODB_URI**
   - Click **"Add variable"** or **"New variable"**
   - **Key:** `MONGODB_URI`
   - **Value:** Your complete connection string
   - **Environment:** Select Production (or All environments)
   - Click **"Save"**

3. **Add Other Required Variables**
   - `NEXT_PUBLIC_ENCRYPTION_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_CURRENCY`
   - `NEXT_PUBLIC_SITE_URL` (update after first deploy)

4. **Trigger New Deployment**
   - Go to your platform's deploy section
   - Click **"Redeploy"** or **"Deploy"**
   - This applies the new environment variables

---

### Step 5.2: Verify Deployment Platform Connection

1. **Check Build Logs**
   - Go to your deployment platform's build/deploy logs
   - Look for MongoDB connection errors
   - Should see successful build

2. **Test Live Site**
   - Visit your deployment platform URL
   - Try user registration
   - Check MongoDB Atlas → `users` collection
   - Should see new user from live site

---

## 🐛 Part 6: Troubleshooting

### Connection Timeout Error

**Error:** `MongoServerError: connection timed out`

**Solutions:**
1. ✅ Check Network Access in Atlas
   - Go to Network Access
   - Ensure `0.0.0.0/0` is added
   - Wait 1-2 minutes after adding

2. ✅ Verify connection string format
   - Should start with `mongodb+srv://`
   - Should include database name: `/roots2global`

3. ✅ Check firewall/proxy settings
   - Some networks block MongoDB connections
   - Try different network

---

### Authentication Failed Error

**Error:** `MongoServerError: Authentication failed`

**Solutions:**
1. ✅ Verify username and password
   - Check Database Access → Users
   - Ensure username matches connection string
   - Password must match exactly

2. ✅ URL encode special characters
   - If password has `@`, `#`, `$`, `%`, etc.
   - Encode them: `@` → `%40`

3. ✅ Check user privileges
   - User must have "Read and write" privileges
   - Or "Atlas admin" for full access

---

### Database Not Found Error

**Error:** `MongoServerError: database not found`

**Solutions:**
1. ✅ Add database name to connection string
   - Format: `mongodb+srv://.../roots2global?...`
   - MongoDB creates database automatically on first write

2. ✅ Verify connection string format
   - Should have `/roots2global` before `?`

---

### Environment Variable Not Found

**Error:** `MONGODB_URI environment variable is not set`

**Solutions:**
1. ✅ Check `.env.local` file exists
   - Should be in project root
   - Not in subdirectories

2. ✅ Verify variable name
   - Must be exactly `MONGODB_URI`
   - Case-sensitive

3. ✅ Restart development server
   - Environment variables load on server start
   - Stop server (Ctrl+C) and restart

4. ✅ For cloud deployment platforms
   - Check Site settings → Environment variables
   - Ensure variable is set for correct environment
   - Trigger new deployment

---

### Collections Not Created

**Issue:** No collections appear in Atlas

**Solutions:**
1. ✅ Collections are created automatically
   - On first write operation
   - Try creating a user or order

2. ✅ Check correct database
   - Ensure you're looking at the right database
   - Database name should match connection string

---

## 📊 Part 7: Database Collections Reference

### Collections Created Automatically

1. **users**
   - Stores user accounts
   - Fields: email, password (hashed), name, phone, etc.

2. **orders**
   - Stores customer orders
   - Fields: items, total, shipping address, status, etc.

3. **products**
   - Stores product catalog
   - Fields: name, price, description, images, etc.

4. **reviews**
   - Stores product reviews
   - Fields: productId, userId, rating, comment, etc.

5. **coupons**
   - Stores discount coupons
   - Fields: code, discountType, discountValue, etc.

### Viewing Collections in Atlas

1. Go to **Clusters** → Your cluster
2. Click **"Browse Collections"**
3. Select database: `roots2global`
4. View collections and documents

---

## 🔒 Part 8: Security Best Practices

### Password Security

- ✅ Use strong, unique passwords
- ✅ Never commit passwords to Git
- ✅ Rotate passwords regularly
- ✅ Use different passwords for dev/prod

### Network Security

- ✅ For production: Restrict IP access
- ✅ Remove `0.0.0.0/0` after testing
- ✅ Add only specific IPs (your deployment platform IPs, your server IPs)

### Connection String Security

- ✅ Never expose in client-side code
- ✅ Always use environment variables
- ✅ Use different credentials for dev/prod
- ✅ Monitor access logs in Atlas

---

## 📝 Part 9: Complete Setup Checklist

### MongoDB Atlas Setup
- [ ] Account created
- [ ] Cluster created and running
- [ ] Database user created with read/write privileges
- [ ] Network access configured (0.0.0.0/0 for testing)
- [ ] Connection string obtained and formatted correctly

### Local Development
- [ ] `.env.local` file created
- [ ] `MONGODB_URI` added to `.env.local`
- [ ] Connection string includes database name
- [ ] Password URL-encoded if needed
- [ ] Encryption key generated and added
- [ ] Connection test passes (`npm run test:db`)
- [ ] Development server starts without errors
- [ ] User registration works
- [ ] Data appears in MongoDB Atlas

### Deployment Platform
- [ ] `MONGODB_URI` added to your deployment platform environment variables
- [ ] All other required variables added
- [ ] New deployment triggered
- [ ] Build succeeds
- [ ] Live site connects to database
- [ ] User registration works on live site
- [ ] Data appears in MongoDB Atlas from live site

---

## 🎯 Quick Test Commands

```bash
# Test database connection
npm run test:db

# Start development server
npm run dev

# Check environment variables (verify MONGODB_URI is set)
node -e "console.log(process.env.MONGODB_URI ? 'MONGODB_URI is set' : 'MONGODB_URI is NOT set')"

# Generate encryption key
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📚 Additional Resources

- **MongoDB Atlas Docs:** https://docs.atlas.mongodb.com
- **Mongoose Docs:** https://mongoosejs.com/docs
- **Connection String Format:** https://docs.mongodb.com/manual/reference/connection-string/
- **Network Access:** https://docs.atlas.mongodb.com/security/ip-access-list/

---

## ✅ Success Criteria

Your database is properly set up when:

1. ✅ Connection test passes
2. ✅ Development server starts without errors
3. ✅ User registration creates document in `users` collection
4. ✅ Orders are saved to `orders` collection
5. ✅ Data persists after server restart
6. ✅ Live site (deployment platform) connects successfully
7. ✅ Collections visible in MongoDB Atlas dashboard

---

**Follow this guide step-by-step to ensure complete database setup and testing!** 🚀

