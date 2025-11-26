# How to View Orders in the UI

## 📍 Quick Access to Orders

### Method 1: Navigation Bar (Easiest)
1. **Look at the top navigation bar**
2. **Click "Orders"** (visible to everyone)
3. If not logged in, you'll be redirected to login
4. After login, you'll see all your orders

### Method 2: User Menu
1. **Click your name/icon** in the top right corner
2. **Click "My Orders"** from the dropdown menu
3. You'll see all your orders

### Method 3: Direct URL
- Go to: `http://localhost:3000/orders`
- Or: `http://localhost:3000/orders/[ORDER_ID]` for specific order

### Method 4: Account Page
1. Go to `/account`
2. Scroll to "Quick Links"
3. Click "View My Orders →"

---

## 🎯 What You'll See

### Orders List Page (`/orders`)

**If you have orders:**
- ✅ List of all your orders
- ✅ Order ID (e.g., ORD-1234567890-ABC123)
- ✅ Order status badge (Pending/Processing/Shipped/Delivered)
- ✅ Order date
- ✅ Number of items
- ✅ Total amount
- ✅ Product thumbnails (first 4 items)
- ✅ Shipping location preview
- ✅ "View Details" button for each order
- ✅ Search bar to filter orders

**If you have no orders:**
- 📦 Empty state message
- 💡 "Start Shopping" button

### Order Detail Page (`/orders/[ORDER_ID]`)

**Order Status Timeline:**
- ⏰ Order Placed
- 📦 Processing
- 🚚 Shipped (with tracking number)
- ✅ Delivered

**Order Information:**
- 📋 All order items with quantities
- 💰 Order summary (subtotal, shipping, total)
- 💳 Payment method (Card or COD)
- 📍 Complete shipping address
- 📞 Contact information

---

## 🧪 How to Test Orders View

### Step 1: Create an Account
1. Go to `/register`
2. Fill in your details
3. Create account

### Step 2: Place an Order
1. Browse products at `/products`
2. Add items to cart
3. Go to `/cart`
4. Click "Proceed to Checkout"
5. Fill shipping form
6. Select payment method (COD is easiest for testing)
7. Complete order

### Step 3: View Your Orders
1. After order completion, you'll see "Order Success" page
2. Click "View Order Details" or "View All Orders"
3. Or navigate to `/orders` from header

---

## 🔍 Order Features

### Search Orders
- Use the search bar on `/orders` page
- Search by:
  - Order ID
  - Email address

### Filter Orders
- Currently shows all your orders
- Sorted by most recent first

### Order Status Colors
- 🟡 **Pending** - Yellow badge
- 🔵 **Processing** - Blue badge
- 🟣 **Shipped** - Purple badge
- 🟢 **Delivered** - Green badge

---

## 📱 Mobile View

- Orders page is fully responsive
- Works on all screen sizes
- Touch-friendly interface
- Mobile menu includes "Orders" link

---

## 🛒 Seller View (All Orders)

If you're logged in as a seller:
- Go to `/seller/orders`
- See ALL orders from all customers
- Update order status
- Filter by status
- Search orders

**Seller Login:**
- URL: `/seller/login`
- Password: `seller123`

---

## ❓ Troubleshooting

### "Please sign in to continue"
- **Solution:** You need to be logged in to view orders
- Click "Sign In" or create an account

### "No Orders Yet"
- **Solution:** You haven't placed any orders
- Place an order first, then come back

### Orders not showing
- **Check:** Make sure you're logged in with the same email used for orders
- **Check:** Orders are stored in browser localStorage
- **Note:** If you clear browser data, orders will be lost (this is expected for demo)

---

## 🎨 Visual Guide

```
┌─────────────────────────────────────────┐
│  Header Navigation                      │
│  [Logo] [Home] [Products] [Orders] ←───┼── Click here!
│                                         │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  My Orders                              │
│  Track and manage your orders           │
│                                         │
│  ┌─────────────────────────────────┐  │
│  │ 🔍 Search by order ID or email   │  │
│  └─────────────────────────────────┘  │
│                                         │
│  ┌─────────────────────────────────┐  │
│  │ Order ORD-123...                 │  │
│  │ Status: Pending                  │  │
│  │ Date: Jan 15, 2025               │  │
│  │ Items: 3 | Total: $24.97        │  │
│  │ [Product Images]                 │  │
│  │ 📍 City, State, Country          │  │
│  │ [View Details →]                 │  │
│  └─────────────────────────────────┘  │
│                                         │
│  ┌─────────────────────────────────┐  │
│  │ Order ORD-456...                 │  │
│  │ Status: Shipped                  │  │
│  │ ...                              │  │
│  └─────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## ✅ Quick Checklist

- [ ] Logged in to your account
- [ ] Navigate to `/orders` or click "Orders" in header
- [ ] See your orders list
- [ ] Click "View Details" to see full order information
- [ ] Use search to find specific orders

---

**Need Help?** Check the FAQ page or contact support!

