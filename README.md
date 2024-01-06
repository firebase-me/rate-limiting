# Firebase Rate Limiting with Cloudflare API Shield
## Traffic routed through cloudflare

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
