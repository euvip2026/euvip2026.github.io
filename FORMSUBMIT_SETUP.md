# FormSubmit Setup Guide

**FormSubmit** is a free form backend service that requires **NO registration** and **NO API keys**! Perfect for GitHub Pages.

## How It Works

FormSubmit is a simple service that forwards form submissions to your email address. You just need to:
1. Change the email address in the code (or environment variable)
2. That's it! No signup, no API keys, no configuration.

## Setup (Takes 30 seconds!)

### Option 1: Use Encrypted Token (Recommended - More Secure)

After your first form submission, FormSubmit will send you an email with an encrypted token. Use this token instead of your email to prevent email harvesting.

1. Check your email after first submission - FormSubmit will send you a message with a token like: `abc123def456...`

2. Update `.env.local`:
   ```env
   NEXT_PUBLIC_FORMSUBMIT_TOKEN=your_encrypted_token_here
   ```

3. The form will use the encrypted token (your email is hidden from the code).

### Option 2: Use Email Address (Works but less secure)

1. Update `.env.local`:
   ```env
   NEXT_PUBLIC_RECIPIENT_EMAIL=your-email@gmail.com
   ```

2. The form will use your email address directly (visible in code).

### Option 3: Multiple Recipients

FormSubmit supports sending to multiple email addresses using comma-separated emails:

1. Update `.env.local`:
   ```env
   NEXT_PUBLIC_RECIPIENT_EMAIL=email1@gmail.com,email2@gmail.com,email3@gmail.com
   ```

2. All recipients will receive the form submission.

**Important Notes:**
- ✅ **Comma-separated emails work** with `NEXT_PUBLIC_RECIPIENT_EMAIL`
- ⚠️ **Encrypted tokens** (`NEXT_PUBLIC_FORMSUBMIT_TOKEN`) typically work for single emails only
- 💡 **Alternative:** Set up a group/distribution email (e.g., `contact@yourdomain.com`) that forwards to multiple recipients
- 💡 **Alternative:** Use your email provider's forwarding rules to send to multiple addresses

### Option 2: Hardcode Email (Simplest)

If you don't want to use environment variables, you can directly edit `src/components/ContactForm/index.tsx`:

Change this line:
```typescript
const recipientEmail = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || `your_email@address.com`

To:
```typescript
const recipientEmail = 'your-email@gmail.com'
```

## For GitHub Pages Deployment

Since `NEXT_PUBLIC_RECIPIENT_EMAIL` is a public environment variable, you can set it in GitHub:

### Option A: GitHub Actions Workflow

The workflow file (`.github/workflows/deploy.yml`) is already set up. Just add the secret:

**For Encrypted Token (Recommended):**
1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `NEXT_PUBLIC_FORMSUBMIT_TOKEN`
   - Value: `your_encrypted_token_from_formsubmit`
5. Click **Add secret**

**Or for Email Address (Single or Multiple):**
1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `NEXT_PUBLIC_RECIPIENT_EMAIL`
   - Value: `youruser@gmail.com` (single email)
   - Or: `email1@gmail.com,email2@gmail.com,email3@gmail.com` (multiple emails - comma-separated)
5. Click **Add secret**

### Option B: Hardcode in Code

If you prefer, you can hardcode the email directly in the component (see Option 2 above).

## Features

✅ **No Registration** - Just use it!
✅ **No API Keys** - No configuration needed
✅ **Free** - Unlimited submissions (with rate limiting)
✅ **Spam Protection** - Built-in spam filtering
✅ **Works Everywhere** - GitHub Pages, Netlify, Vercel, anywhere!

## Rate Limits

- **Free tier**: 50 submissions per day per email
- If you need more, FormSubmit offers paid plans
- For most websites, 50/day is plenty

## Email Format

FormSubmit sends emails in a nice table format with:
- Sender name
- Sender email (you can reply directly)
- Subject
- Message

## Customization

You can customize the email template by adding these parameters:

```typescript
body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
  _captcha: false, // Disable FormSubmit's captcha
  _template: 'table', // Options: 'table', 'box', 'basic'
  _subject: `[EUVIP 2026] ${formData.subject}`, // Custom subject
}),
```

## Testing

1. Fill in your email in `.env.local` or hardcode it
2. Run `npm run dev`
3. Submit the contact form
4. Check your email inbox (and spam folder)

## Troubleshooting

### Emails not received
- Check spam/junk folder
- Verify email address is correct
- Check FormSubmit status: https://formsubmit.co/status

### "Failed to send message"
- Check browser console for errors
- Verify the email address format is correct
- Make sure you haven't exceeded rate limits (50/day)

### Rate limit exceeded
- Wait 24 hours, or
- Use a different email address temporarily, or
- Upgrade to FormSubmit Pro (paid)

## Security

✅ **Built-in spam protection**
✅ **Honeypot field** (already implemented in the form)
✅ **Time-based validation** (already implemented)
✅ **Rate limiting** (FormSubmit's own protection)

## Alternative: Multiple Recipients

To send to multiple recipients, you can:
1. Create a Gmail filter to forward emails
2. Use a group email address
3. Use FormSubmit's paid plan for multiple recipients

## Need Help?

- [FormSubmit Documentation](https://formsubmit.co/documentation)
- [FormSubmit Status](https://formsubmit.co/status)

## That's It!

No registration, no API keys, no complicated setup. Just change the email address and you're done! 🎉

