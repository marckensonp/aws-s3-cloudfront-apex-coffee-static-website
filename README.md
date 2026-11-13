# aws-s3-cloudfront-apex-coffee-static-website
This is an AI guided custom project where I migrate a clients website to the aws cloud keeping access to the s3 bucket secure while providing a way for customers to access the website via cloudfront. I want to learn how to do this myself without a guide so I will replicate this project with a different website!!! 
Below is a Recruiter-ready template for a readme.

# ☁️ Secure Static Website Hosting on AWS (S3 + CloudFront OAC)

A production-ready, serverless static website architecture built for **Apex Coffee Roasters**, migrating a high-traffic marketing site from slow shared hosting to a globally cached, HTTPS-secured AWS environment.

## 🏗️ Architecture Overview

```text
[ End User ] ──(HTTPS)──▶ [ Amazon CloudFront (CDN + OAC) ] ──(IAM Policy)──▶ [ Private Amazon S3 Bucket ]
```

### AWS Services Used
* **Amazon S3:** Stores static web assets (`index.html`, `styles.css`, `script.js`, `error.html`) with **Block All Public Access** strictly enabled.
* **Amazon CloudFront:** Delivers content globally from edge locations with low latency and enforces **HTTPS** encryption.
* **Origin Access Control (OAC):** Authenticates CloudFront requests to the private S3 bucket using a least-privilege JSON bucket policy, preventing direct public S3 URL scraping.

## 🛠️ Real-World Troubleshooting & Lessons Learned
1. **IAM & WAF Permission Boundaries:** During CloudFront provisioning in a least-privilege IAM environment, automatic AWS WAF creation triggered a `wafv2:CreateWebACL` authorization error. Resolved by explicitly disabling WAF protections to align with least-privilege lab constraints.
2. **Origin Path vs. Default Root Object:** Initially configured `/index.html` inside the CloudFront *Origin Path*, resulting in an `AccessDenied` XML error when CloudFront appended a duplicate path. Cleared the Origin Path and configured `index.html` under the **Default Root Object** setting.

## 📂 Repository Structure
* `index.html` — Main landing page and interactive roast reservation form
* `styles.css` — Responsive CSS styling
* `script.js` — Client-side form handling and product selection
* `error.html` — Custom 404 error page
* `bucket-policy.json` — Sanitized least-privilege S3 bucket policy for CloudFront OAC

## 🚀 Live Demo
* **CloudFront Endpoint:** `https://d15y6ihv2bq2ff.cloudfront.net`
