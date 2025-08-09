git checkout main
git pull origin main
git checkout -b feature/contact-form-updates
git add app/api/contact/route.ts
git commit -m "Add branded HTML email templates + confirmation email; wire up reCAPTCHA and Resend"
git push -u origin feature/contact-form-updates
