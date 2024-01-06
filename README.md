# Firebase Traffic Routing through Cloudflare API Shield

## Overview

This project demonstrates how to route all Firebase traffic for Storage, Firestore, and Realtime Database through Cloudflare API Shield to implement native client-based rate limiting.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Configuration](#configuration)
- [Client Credentials](#client-credentials)
- [Usage](#usage)
- [Tips](#tips)
- [License](#license)

## Prerequisites

Before getting started, ensure you have the following:

- Firebase project set up with Storage, Firestore, and Realtime Database.
- Cloudflare account with API Shield enabled.
- Node.js and npm installed.

## Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Firebase Configuration:**
   - Configure Firebase SDK for Storage, Firestore, and Realtime Database.

3. **Cloudflare API Shield Configuration:**
   - Configure API Shield in your Cloudflare dashboard.
   - Update DNS settings to route traffic through Cloudflare.

## Configuration

Update the configuration files:

- **Firebase Configuration:**
  - Update Firebase SDK configurations in `firebaseConfig.js`.

- **Cloudflare API Shield Configuration:**
  - Update Cloudflare API Shield settings in `cloudflareConfig.js`.

## Client Credentials

To support native client-based rate limiting, adjust client credentials in your Firebase project:

- **Storage:**
  - Update the Firebase Storage SDK initialization with Cloudflare CDN URL.

- **Firestore:**
  - Update Firestore SDK initialization with Cloudflare CDN URL.

- **Realtime Database:**
  - Update Realtime Database SDK initialization with Cloudflare CDN URL.

## Usage

Run your Firebase project with the modified configurations:

```bash
npm start
```

Visit your Firebase services through the Cloudflare CDN URL to utilize API Shield for rate limiting.

## Tips

- Keep client credentials secure and use environment variables.
- Monitor Cloudflare API Shield analytics for traffic insights.
- Regularly update SDKs and dependencies for security and performance improvements.

## License

This project is licensed under the [MIT License](LICENSE).
