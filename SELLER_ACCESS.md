# Seller Access Information

## Seller Login

The seller dashboard is protected and requires authentication. Only authorized sellers can access it.

### Default Password
- **Password:** `seller123`

⚠️ **Important:** Change this password in production by editing `lib/authStore.ts`

### How to Access Seller Dashboard

1. Go to: http://localhost:3000/seller/login
2. Enter the seller password
3. Click "Login"
4. You'll be redirected to the seller dashboard

### Features Available to Sellers

- **Dashboard Overview** (`/seller`)
  - View statistics (Total Orders, Pending, Processing, Revenue)
  - Quick access to order management
  - Recent orders preview

- **Order Management** (`/seller/orders`)
  - View all customer orders
  - Search and filter orders
  - Update order status
  - Pack orders

- **Order Details** (`/seller/orders/[id]`)
  - View complete order information
  - Packing list
  - Shipping address
  - Update order status
  - Print packing slips

### Security Notes

- The seller option in the navigation menu only appears when logged in as a seller
- All seller routes are protected and require authentication
- Session persists in browser localStorage
- Logout clears the session

### Changing the Password

To change the seller password, edit `lib/authStore.ts`:

```typescript
const SELLER_PASSWORD = 'your-new-password-here';
```

For production, consider implementing:
- Proper authentication system
- User accounts with roles
- Secure password hashing
- Session management
- API-based authentication

