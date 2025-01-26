# Deploying to Cloudflare Pages

This guide provides step-by-step instructions for deploying this application to Cloudflare Pages.

## Prerequisites

Before you begin, ensure you have:
- A GitHub account with this repository pushed to it
- A Cloudflare account (free tier is sufficient)
- Node.js and npm installed locally for testing

## Initial Setup

1. Log in to your Cloudflare dashboard (https://dash.cloudflare.com)
2. Navigate to the Pages section
3. Click "Create a project"
4. Select "Connect to Git"

## Repository Configuration

1. Select your GitHub account
2. Grant Cloudflare access to your repository
3. Choose this repository from the list
4. Click "Begin setup"

## Build Configuration

Configure your build settings as follows:

```
Production branch: main
Framework preset: None
Build command: npm ci && npm run build
Build output directory: dist
```

### Environment Variables

Set the following environment variables in your Cloudflare Pages project settings:

```
NODE_VERSION: 18
NPM_VERSION: 9
```

## Branch Deployments

Cloudflare Pages automatically:
- Deploys the production branch (main)
- Creates preview deployments for all other branches
- Generates a unique URL for each deployment

To configure branch deployments:
1. Go to project settings
2. Navigate to the "Builds & deployments" section
3. Configure production and preview branches as needed

## Custom Domain Setup

To add a custom domain:

1. Go to project settings
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain name
5. Follow the DNS configuration instructions provided by Cloudflare
6. Wait for DNS propagation (usually 5-10 minutes)

### DNS Configuration

If your domain is already on Cloudflare:
- CNAME record will be automatically configured

If your domain is elsewhere:
- Add a CNAME record pointing to your-project.pages.dev

## Environment Variables Management

To add or modify environment variables:

1. Go to project settings
2. Click "Environment variables"
3. Add variables as needed:
- Production only: Toggle "Production" only
- Preview branches: Toggle "Preview" only
- Both: Leave both toggled

## Deployment Preview

Each commit/push to any branch will:
1. Trigger a new build
2. Generate a unique preview URL
3. Show build status in GitHub
4. Send notifications (if configured)

## Monitoring and Logs

Access deployment logs:
1. Go to your project in Cloudflare Pages
2. Click on a deployment
3. View build logs and deployment status

## Troubleshooting

Common issues and solutions:
- Build failures: Check build logs for errors
- Missing dependencies: Verify package.json
- Environment variables: Confirm they're set correctly
- Custom domain issues: Verify DNS settings

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Custom Domain Setup Guide](https://developers.cloudflare.com/pages/platform/custom-domains)
- [Build Configuration Documentation](https://developers.cloudflare.com/pages/platform/build-configuration)

