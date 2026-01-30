# Frontend Testing Guide - NEXIUM-AI

## 🚀 Quick Start Testing

### Step 1: Install Dependencies ✅ (Already Running)
```bash
npm install --legacy-peer-deps
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Wagmi + RainbowKit (Wallet integration)
- Framer Motion (Animations)
- All other dependencies

**Status**: Installation running in background...

---

## 🧪 Step 2: Run Development Server

Once npm install completes (you'll see "added X packages"), run:

```bash
npm run dev
```

This starts the Next.js dev server at **http://localhost:3000**

---

## 🌐 Step 3: Access the Website

Open your browser and go to:
```
http://localhost:3000
```

You should see:
- ✨ Particle background animation
- 🎯 Nexium logo in navbar
- 📊 Showcase users section
- 💻 All pages loading

---

## 📋 What to Test

### 1. **Home Page** (`/`)
- [ ] Particle background animating
- [ ] Nexium logo visible and animated
- [ ] Navigation links working
- [ ] Showcase users section displaying
- [ ] All animations smooth
- [ ] Mobile responsive (open DevTools)

### 2. **Navbar**
- [ ] Logo animates on hover
- [ ] All menu items clickable
- [ ] Mobile menu opens/closes
- [ ] Connect Wallet button visible

### 3. **Packages Page** (`/packages`)
- [ ] 4 package cards displaying
- [ ] Package I-III showing prices
- [ ] Package IV custom amount input working
- [ ] Payment method buttons interactive
- [ ] "Connect Wallet" button appears when not connected

### 4. **Dashboard** (`/dashboard`)
- [ ] Shows "Connect Your Wallet" if not connected
- [ ] Stats cards displaying
- [ ] Earnings chart visible
- [ ] Quick actions buttons working

### 5. **Animations**
- [ ] Floating orbs in background
- [ ] Glowing effects on cards
- [ ] Hover animations on buttons
- [ ] Smooth transitions between sections
- [ ] Loading screen shows briefly

### 6. **Responsiveness**
- [ ] Test on mobile (DevTools)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Navigation adapts to screen size
- [ ] Cards stack properly

---

## 🔧 Development Tools

### Hot Reload
Changes save automatically while dev server is running. Just edit any file and the browser will update instantly!

### Browser DevTools
Press `F12` to open DevTools and check:
- **Console**: No error messages
- **Network**: All files loading
- **Performance**: Smooth animations
- **Responsive**: Mobile view

### Check Console for Errors
```
F12 → Console tab
```

Look for any red error messages. There shouldn't be any!

---

## 🧬 Testing with Wagmi (Wallet Connection)

### Install MetaMask or Trust Wallet Extension
1. Download MetaMask Chrome extension
2. Create/import a wallet
3. Switch to BSC Testnet

### On the Website
1. Click "Connect Wallet" button (top right)
2. Select MetaMask
3. Approve the connection
4. Your wallet address should show in navbar

### Pages That Need Connected Wallet
- `/dashboard` - Shows stats
- `/packages` - Can "purchase" packages
- `/referral` - Shows referral info
- `/staking` - Staking interface

---

## 📊 Testing Checklist

```
VISUAL ✓
- [ ] Logo displays correctly
- [ ] Colors match design (green theme)
- [ ] Animations are smooth
- [ ] No broken images

FUNCTIONALITY ✓
- [ ] All links navigate correctly
- [ ] Buttons are clickable
- [ ] Forms work (if any)
- [ ] Mobile menu opens/closes

PERFORMANCE ✓
- [ ] Page loads within 2 seconds
- [ ] Animations at 60fps
- [ ] No lag on interactions
- [ ] No console errors

RESPONSIVENESS ✓
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1920px width)
- [ ] All elements visible

WALLET ✓ (Optional)
- [ ] Connect Wallet works
- [ ] Wallet address displays
- [ ] Dashboard data loads
- [ ] Pages require connection
```

---

## 🐛 Common Issues & Fixes

### Issue: "Port 3000 already in use"
```bash
# Use different port
npm run dev -- -p 3001
# Go to http://localhost:3001
```

### Issue: Styles not loading (Tailwind)
```bash
# Clear cache and restart
npm run dev
# Hard refresh: Ctrl+Shift+R
```

### Issue: Module not found errors
```bash
# Make sure all files exist
ls src/components/ui/
# Should show: NexiumLogo.tsx, ParticleBackground.tsx, LoadingScreen.tsx
```

### Issue: Wagmi connection errors
```bash
# Check you have MetaMask installed
# Make sure it's BSC Testnet
# Try connecting again
```

---

## 📈 Performance Testing

### Check Animations Performance
1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Scroll page for 5 seconds
5. Click Stop
6. Look for dropped frames (should be 0)

### Check Page Speed
Use Google PageSpeed Insights:
```
https://pagespeed.web.dev/
```
Enter your local URL after deploying.

---

## 🎯 Next Steps After Testing

### If Everything Looks Good ✅
1. **Deploy Smart Contracts**
   ```bash
   npm run deploy:testnet
   ```

2. **Deploy Frontend**
   - Push to GitHub
   - Deploy to Vercel (automatic)
   - Or deploy to your own server

### If There Are Issues ❌
1. Check console errors (F12)
2. Check file paths are correct
3. Make sure all components are imported
4. Check package.json has all dependencies

---

## 📱 Testing on Different Devices

### Mobile Testing
Option 1: Chrome DevTools
- F12 → Click device icon (top left)
- Select "iPhone 12" or "Pixel 5"

Option 2: Actual Device
- Find your computer's local IP: `ipconfig`
- On phone, go to: `http://YOUR_IP:3000`

### Tablet Testing
- DevTools → Select "iPad Pro"

---

## ✅ Success Criteria

You'll know the frontend is working correctly when:
1. ✅ Home page loads with animations
2. ✅ All pages are accessible via navbar
3. ✅ Particle background animates smoothly
4. ✅ Nexium logo is visible and animated
5. ✅ Showcase users section displays
6. ✅ No console errors
7. ✅ Mobile view works properly
8. ✅ Wallet connection works (optional)

---

## 🚀 Commands Reference

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Compile smart contracts (after installing Hardhat)
npm run compile

# Deploy to testnet
npm run deploy:testnet
```

---

## 💡 Pro Tips

1. **Hot Reload**: Edit any file and browser updates automatically
2. **DevTools**: Always check console (F12) for errors
3. **Responsive**: Always test on mobile view
4. **Cache**: If styles look wrong, hard refresh (Ctrl+Shift+R)
5. **MetaMask**: Keep it on BSC Testnet for testing

---

## 🎬 Once npm install Completes

You'll see:
```
added XXX packages in Xs
PS C:\Users\HP\OneDrive\Desktop\CNX>
```

Then run:
```bash
npm run dev
```

And open: **http://localhost:3000** in your browser!

Happy testing! 🚀
