# Armorist DeepTool API Scanner

[![Security](https://img.shields.io/badge/Security-OWASP%20ZAP-blue)](https://www.zaproxy.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-green)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

A comprehensive, production-ready **API security scanning microservice** built on **OWASP ZAP**, designed for deep vulnerability analysis of REST APIs using OpenAPI specifications and authenticated attack techniques.

> **⚠️ Internal Use Only**: This scanner is designed to run behind the Armorist backend layer and should never be directly exposed to the internet.

---

## 📋 Table of Contents

- [Architecture Overview](#-architecture-overview)
- [Quick Start](#-quick-start)
- [Features](#-features)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [Security](#-security)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Project Structure](#-project-structure)

---

## 🏗 Architecture Overview

```
Frontend (Next.js) → Nginx → Backend API (8092) → API Scanner (8000)
                                ↑
                    Auth, Subscription, Payment Layer
```

**Key Design Principles:**
- Scanner runs on `localhost:8000` only
- Never exposed to the internet
- Backend API acts as the single gateway
- No CORS/Auth inside scanner (handled by backend)
- Frontend never communicates with scanner directly

---

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- OWASP ZAP installed
- Access to Armorist backend (port 8092)

### 1. Configure the Scanner (2 minutes)

```bash
cd /path/to/armorist-deeptool-api-scanner
cp .env.development .env
nano .env
```

**Important `.env` Settings:**

```bash
# Bind to localhost only (not exposed)
API_HOST=127.0.0.1
API_PORT=8000

# Backend handles these
CORS_ENABLED=false
ENABLE_API_AUTH=false
RATE_LIMIT_ENABLED=false

# ZAP Configuration
ZAP_URL=http://127.0.0.1:8080
ZAP_API_KEY=changeme
```

### 2. Start OWASP ZAP (Daemon Mode)

```bash
zaproxy -daemon \
  -host 127.0.0.1 \
  -port 8080 \
  -config api.disablekey=false \
  -config api.key=changeme
```

**Verify ZAP is Running:**

```bash
curl http://127.0.0.1:8080/JSON/core/view/version/
```

### 3. Start the API Scanner

```bash
python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

**Verify Scanner:**

```bash
curl http://127.0.0.1:8000/health
```

### 4. Backend Integration

Your backend proxies requests to the scanner:

```
https://uat-v1.armorist.ai/backend/api-scanner/* 
    → Backend (8092) 
    → API Scanner (8000)
```

The scanner is **never exposed publicly**.

---

## 🎯 Features

### Scan Types

| Scan Type | Description |
|-----------|-------------|
| `passive_only` | Passive checks only (no active attacks) |
| `active_full` | Full active + passive vulnerability scan |
| `api_openapi` | OpenAPI-driven deep API scan |

### Capabilities

- ✅ OWASP ZAP active & passive scanning
- ✅ OpenAPI / Swagger specification import
- ✅ Authenticated API scanning
- ✅ SQL Injection detection
- ✅ Command Injection detection
- ✅ Cross-Site Scripting (XSS) testing
- ✅ Security header analysis
- ✅ JSON + HTML report generation
- ✅ Real-time scan status tracking

### Security Features

#### Core Security Fixes
- ✅ Constant-time API key comparison
- ✅ Strict input validation
- ✅ Target re-validation before scan
- ✅ Error sanitization
- ✅ Session isolation per scan
- ✅ No internal stack traces leaked

#### Security Enhancements
- 🔐 Request size limits (DoS protection)
- 🛡️ Security headers (defense-in-depth)
- 🚦 Backend-enforced rate limiting
- 🌐 CORS fully disabled
- 📝 Strict schema-based request validation

---

## 💾 Installation

### Clone the Repository

```bash
git clone https://github.com/armorist/armorist-deeptool-api-scanner.git
cd armorist-deeptool-api-scanner
```

### Install Dependencies

```bash
pip3 install -r requirements.txt
```

### Install OWASP ZAP

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install zaproxy
```

**macOS:**
```bash
brew install --cask owasp-zap
```

---

## ⚙️ Configuration

### Environment Files

#### Development/UAT

```bash
cp .env.development .env
```

Features:
- CORS disabled
- API auth disabled
- Localhost-only binding
- Verbose logging

#### Production

```bash
cp .env.production .env
```

Features:
- Strict security settings
- Production logging level
- Localhost-only binding
- Backend-enforced authentication

### Configuration Reference

| Variable | Default | Description |
|----------|---------|-------------|
| `API_HOST` | `127.0.0.1` | Scanner bind address |
| `API_PORT` | `8000` | Scanner port |
| `ZAP_URL` | `http://127.0.0.1:8080` | ZAP daemon URL |
| `ZAP_API_KEY` | `changeme` | ZAP API key |
| `CORS_ENABLED` | `false` | CORS handling |
| `ENABLE_API_AUTH` | `false` | API authentication |
| `RATE_LIMIT_ENABLED` | `false` | Rate limiting |

---

## 📡 API Endpoints

> **Note:** All endpoints are accessed via backend proxy at `/backend/api-scanner/*`

### Scans

#### Start a New Scan
```http
POST /backend/api-scanner/scan
Content-Type: application/json

{
  "target": "https://api.example.com",
  "openapi": "https://api.example.com/openapi.json",
  "scan_type": "api_openapi"
}
```

#### Get Scan Status
```http
GET /backend/api-scanner/scan/{scan_id}
```

#### Get HTML Report
```http
GET /backend/api-scanner/scan/{scan_id}/report
```

#### Get JSON Report
```http
GET /backend/api-scanner/scan/{scan_id}/report/json
```

### Management

#### Health Check
```http
GET /backend/api-scanner/health
```

---

## 🔒 Security

### Architecture Advantages

- ✅ Backend handles authentication, subscriptions, and billing
- ✅ Scanner never exposed to the internet
- ✅ Centralized access control
- ✅ Easier auditing and monitoring
- ✅ Defense in depth approach

### Firewall Configuration

```bash
# Deny external access to scanner port
sudo ufw deny 8000

# Allow localhost access only
sudo ufw allow from 127.0.0.1 to any port 8000
```

### Security Best Practices

1. **Never expose port 8000** to the internet
2. **Always use the backend proxy** for scanner access
3. **Rotate ZAP API keys** regularly
4. **Monitor scanner logs** for suspicious activity
5. **Keep OWASP ZAP updated** to the latest version

---

## 🚀 Deployment

### Development/UAT

```bash
# Copy development config
cp .env.development .env

# Start the scanner
python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000

# Verify
curl http://127.0.0.1:8000/health
```

### Production (Systemd)

#### 1. Create Service File

```bash
sudo nano /etc/systemd/system/armorist-api-scanner.service
```

```ini
[Unit]
Description=Armorist Deep API Scanner
After=network.target

[Service]
User=armorist
WorkingDirectory=/opt/armorist-deeptool-api-scanner
ExecStart=/usr/bin/python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

#### 2. Enable and Start Service

```bash
sudo systemctl daemon-reload
sudo systemctl enable armorist-api-scanner
sudo systemctl start armorist-api-scanner
sudo systemctl status armorist-api-scanner
```

---

## 🧪 Testing

### Test Scanner Directly (Localhost)

```bash
# Health check
curl http://127.0.0.1:8000/health
```

### Start a Scan

```bash
curl -X POST http://127.0.0.1:8000/scan \
  -H "Content-Type: application/json" \
  -d '{
    "target": "https://api.example.com",
    "openapi": "https://api.example.com/openapi.json",
    "scan_type": "api_openapi"
  }'
```

### Check Scan Status

```bash
curl http://127.0.0.1:8000/scan/status/0
```

---

## 🆘 Troubleshooting

### Scanner Not Running

```bash
# Check service status
sudo systemctl status armorist-api-scanner

# Start service
sudo systemctl start armorist-api-scanner

# View logs
journalctl -u armorist-api-scanner -f
```

### Backend Cannot Connect

```bash
# Test scanner directly
curl http://127.0.0.1:8000/health

# Check if process is running
ps aux | grep uvicorn

# Check port binding
netstat -tlnp | grep 8000
```

### ZAP Not Responding

```bash
# Check ZAP status
curl http://127.0.0.1:8080/JSON/core/view/version/

# Restart ZAP
pkill -f zaproxy
zaproxy -daemon -host 127.0.0.1 -port 8080 -config api.key=changeme
```

---

## 📊 Monitoring

### View Logs

```bash
# Real-time logs
journalctl -u armorist-api-scanner -f

# Last 100 lines
journalctl -u armorist-api-scanner -n 100

# Logs since today
journalctl -u armorist-api-scanner --since today
```

### Health Monitoring

```bash
# Basic health check
curl http://127.0.0.1:8000/health

# Monitor continuously
watch -n 5 'curl -s http://127.0.0.1:8000/health | jq'
```

---

## 📦 Project Structure

```
armorist-deeptool-api-scanner/
├── app/
│   ├── api/
│   │   └── v1/
│   │       └── routes_scan.py       # API route handlers
│   ├── services/
│   │   └── zap_service.py           # ZAP integration service
│   ├── schemas/
│   │   └── scan.py                  # Pydantic models
│   ├── core/
│   │   └── config.py                # Configuration management
│   └── main.py                      # FastAPI application
├── reports/                         # Generated scan reports
│   ├── scan_0.html
│   └── scan_0.json
├── .env.development                 # Development config
├── .env.production                  # Production config
├── .env.example                     # Example config
├── requirements.txt                 # Python dependencies
└── README.md                        # This file
```

---

## 📋 Changelog

### v1.0.0 (Initial Release)
- ✨ Deep API scanning via OWASP ZAP
- ✨ OpenAPI-driven scans
- ✨ JSON & HTML reporting
- ✨ Backend-only integration model
- 🔒 Production-ready security features

---

## 📄 License

Proprietary – Armorist Security Platform

---

## 📚 Additional Resources

- [OWASP ZAP Documentation](https://www.zaproxy.org/docs/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [OpenAPI Specification](https://swagger.io/specification/)

---

## 🤝 Support

For internal support, contact the Armorist security team.

---

**Built for internal security operations. Ready for production.** 🔒
