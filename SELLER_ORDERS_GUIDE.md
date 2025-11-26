# Seller Orders Management Guide

## 🎯 How to Access Seller Orders

### Step 1: Login as Seller
1. Go to: `http://localhost:3000/seller/login`
2. Enter password: `seller123`
3. Click "Login"

### Step 2: Access Orders
**Method 1: From Seller Dashboard**
- After login, you'll see the Seller Dashboard (`/seller`)
- Click **"Manage Orders"** card
- Or click **"View All"** in Recent Orders section

**Method 2: Direct URL**
- Go to: `http://localhost:3000/seller/orders`

**Method 3: Navigation**
- Click "Seller" in header (only visible when logged in as seller)
- Then click "Manage Orders"

---

## 📊 Seller Orders Dashboard Features

### Statistics Cards (Top of Page)
- **Pending Orders** - Orders waiting to be processed
- **Processing Orders** - Orders currently being packed
- **Shipped Orders** - Orders that have been shipped
- **Delivered Orders** - Completed orders

### Search & Filter Tools
1. **Search Bar**
   - Search by: Order ID, Customer Name, Email
   - Real-time filtering

2. **Status Filter**
   - All Status
   - Pending (shows count)
   - Processing (shows count)
   - Shipped (shows count)
   - Delivered (shows count)

3. **Sort Options**
   - Newest First (default)
   - Oldest First
   - Highest Total
   - Lowest Total
   - Status (Pending First)

### Priority Alert
- Yellow alert banner appears when there are pending orders
- Shows count of pending orders
- Reminds you to start processing

---

## 📦 Processing Orders Workflow

### Step 1: View Pending Orders
1. Filter by "Pending" status
2. Or look for orders with yellow "Pending" badge
3. Review order details

### Step 2: Start Packing
1. Click **"Start Packing"** button on pending order
2. Order status changes to "Processing"
3. Order moves to Processing section

### Step 3: Pack the Order
1. Click **"View Details"** to see full packing list
2. View all items with quantities
3. Check shipping address
4. Print packing slip (optional)

### Step 4: Mark as Shipped
1. After packing, click **"Mark as Shipped"**
2. Order status changes to "Shipped"
3. Tracking number is automatically generated
4. Order moves to Shipped section

### Step 5: Mark as Delivered
1. When customer receives order, click **"Mark as Delivered"**
2. Order status changes to "Delivered"
3. Order moves to Delivered section

---

## 🔍 Order Details Page (`/seller/orders/[ORDER_ID]`)

### What You'll See:

**Order Status Timeline:**
- Visual progress indicator
- Shows current status
- Quick action buttons for status updates

**Packing List:**
- All items with images
- Quantities for each item
- Product details (SKU, weight, ingredients)
- Individual prices

**Quick Actions Sidebar:**
- Status update buttons (context-aware)
- Print packing slip button
- Quick access to all actions

**Shipping Information:**
- Full customer name
- Complete shipping address
- Phone number
- Email address

**Order Summary:**
- Subtotal
- Shipping cost
- Total amount
- Payment method (Card/COD)
- Payment ID (if card payment)
- Tracking number (if shipped)

---

## 🎨 Order Status Colors

- 🟡 **Pending** - Yellow (needs attention)
- 🔵 **Processing** - Blue (being packed)
- 🟣 **Shipped** - Purple (in transit)
- 🟢 **Delivered** - Green (completed)

---

## ⚡ Quick Actions

### From Orders List:
- **"Start Packing"** - Changes status from Pending → Processing
- **"Mark as Shipped"** - Changes status from Processing → Shipped
- **"Mark as Delivered"** - Changes status from Shipped → Delivered
- **"View Details"** - Opens full order detail page

### From Order Detail Page:
- **"Start Packing Order"** - Large button for pending orders
- **"Mark as Shipped"** - Large button for processing orders
- **"Mark as Delivered"** - Large button for shipped orders
- **"Print Packing Slip"** - Print order for packing

---

## 📋 Best Practices

1. **Check Pending Orders Daily**
   - Filter by "Pending" to see new orders
   - Process orders in order received (oldest first)

2. **Use Search Efficiently**
   - Search by customer name for quick lookup
   - Search by order ID for specific orders

3. **Update Status Promptly**
   - Mark as "Processing" when you start packing
   - Mark as "Shipped" immediately after shipping
   - Mark as "Delivered" when confirmed received

4. **Print Packing Slips**
   - Use print function for physical packing
   - Includes all order details

5. **Monitor Statistics**
   - Check stats cards for quick overview
   - Focus on pending orders count

---

## 🧪 Testing the Orders Page

### Create Test Orders:
1. **As Customer:**
   - Sign in as buyer
   - Add products to cart
   - Complete checkout (use COD for easy testing)
   - Order appears in seller dashboard

2. **As Seller:**
   - Login at `/seller/login` (password: `seller123`)
   - Go to `/seller/orders`
   - See all orders from all customers
   - Process orders using status buttons

---

## 📱 Mobile View

- Fully responsive design
- Touch-friendly buttons
- Easy to use on tablets/phones
- All features accessible on mobile

---

## 🔐 Security

- Only accessible to authenticated sellers
- Protected route (redirects to login if not seller)
- Seller password: `seller123` (change in production!)

---

## 💡 Tips

- **Filter by Status:** Use status filter to focus on specific order types
- **Sort by Date:** Use "Oldest First" to process orders in order
- **Search:** Use search to quickly find specific orders
- **View Details:** Always check details before processing
- **Print:** Print packing slips for physical packing

---

## 🎯 Quick Access Summary

1. **Login:** `/seller/login` → Password: `seller123`
2. **Dashboard:** `/seller` → Click "Manage Orders"
3. **Orders List:** `/seller/orders`
4. **Order Detail:** `/seller/orders/[ORDER_ID]`

---

**Ready to process orders!** 🚀

