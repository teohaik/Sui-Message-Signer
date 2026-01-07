# Deployment Guide

This guide will help you deploy the Sui Message Signer dApp to production.

## Pre-Deployment Checklist

- [x] Footer with copyright and version added
- [x] Privacy disclaimer included
- [x] LICENSE file created
- [x] README updated with deployment instructions
- [x] SEO metadata configured
- [x] No sensitive data or API keys in code
- [x] All features tested locally

## Production Build

Before deploying, test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

## Deployment Options

### Option 1: Vercel (Recommended - Zero Config)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

   That's it! Vercel will automatically detect Next.js and deploy.

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

### Option 3: Cloudflare Pages

1. **Push to GitHub** (same as above)

2. **Deploy to Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect your GitHub repository
   - Build settings:
     - Framework preset: Next.js
     - Build command: `npm run build`
     - Build output directory: `.next`
   - Click "Save and Deploy"

### Option 4: Self-Hosted (VPS/Cloud)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Run with PM2** (recommended for production)
   ```bash
   npm install -g pm2
   pm2 start npm --name "sui-signer" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx** (optional, for custom domain)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment

1. **Test all features**
   - [ ] Wallet connection works
   - [ ] Message signing works
   - [ ] Signature verification works
   - [ ] Copy functionality works
   - [ ] Footer displays correctly
   - [ ] Mobile responsive

2. **Configure custom domain** (if applicable)

3. **Set up SSL/HTTPS** (usually automatic with Vercel/Netlify/Cloudflare)

4. **Monitor performance**
   - Check loading times
   - Test on different devices
   - Verify wallet compatibility

## Environment Variables

This app currently doesn't require any environment variables. All configuration is done in the code.

If you want to add analytics or other services in the future, create a `.env.local` file:

```env
# Example for future use
NEXT_PUBLIC_ANALYTICS_ID=your-id-here
```

## Updating the App

To deploy updates:

1. Make your changes locally
2. Test thoroughly with `npm run dev`
3. Commit and push to your repository
4. Your hosting platform will automatically redeploy

For manual deployments:
```bash
git add .
git commit -m "Your update message"
git push
```

## Troubleshooting

**Build fails?**
- Run `npm run build` locally first
- Check for TypeScript errors
- Ensure all dependencies are installed

**Wallet not connecting?**
- Ensure HTTPS is enabled (required by wallet extensions)
- Check browser console for errors

**Slow loading?**
- Enable edge caching in your hosting platform
- Consider using a CDN

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Author**: Theodore Chaikalis
**License**: ISC
