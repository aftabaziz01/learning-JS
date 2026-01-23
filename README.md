# Armorist DeepTool API Scanner
Security Version OWASP

A comprehensive, production-ready **API security scanning microservice** built on **OWASP ZAP**,
designed for deep vulnerability analysis of REST APIs using OpenAPI specifications and
authenticated attack techniques.

This scanner is **internal-only** and intended to be used behind the Armorist backend layer.

---

## 🚀 Quick Start
### For Armorist.ai Integration (Backend API Layer)

### Your Setup

Frontend (Next.js)  → Nginx → Backend API (8092) → API Scanner (8000)
                                ↑
                    Auth, Subscription, Payment Layer

---

## 1. Configure Scanner (2 minutes)

cd /mnt/d/git-teknomee/armorist-deeptool-api-scanner
cp .env.development .env
nano .env   # Update ZAP_URL and ZAP_API_KEY
Important .env Settings
API_HOST=127.0.0.1        # Bind to localhost only (not exposed)
CORS_ENABLED=false        # Backend handles CORS
ENABLE_API_AUTH=false    # Backend handles authentication
RATE_LIMIT_ENABLED=false # Backend handles rate limiting

ZAP_URL=http://127.0.0.1:8080
ZAP_API_KEY=changeme

---
## 2. Start OWASP ZAP (Daemon)
zaproxy -daemon \
  -host 127.0.0.1 \
  -port 8080 \
  -config api.disablekey=false \
  -config api.key=changeme
Verify ZAP:

curl http://127.0.0.1:8080/JSON/core/view/version/
### 3. Start API Scanner
python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000
Verify scanner:

curl http://127.0.0.1:8000/health

# 4. Integrate with Your Backend (8092)
Your backend proxies requests to the scanner:

https://uat-v1.armorist.ai/backend/api-scanner/* 
        → Backend (8092) 
        → API Scanner (8000)
The scanner is never exposed publicly.

📚 Documentation
Getting Started
Quick Start Guide – 5-minute setup

Armorist Backend Integration Guide

Nginx Reverse Proxy Configuration

Security
Security Analysis Summary

OWASP ZAP Configuration Notes

Sensitive Target Protection Guidelines

Technical
Scan Engine Architecture

Scan Type Configuration

JSON Report Schema

🔒 Security Features
Core Security Fixes ✅
Constant-time API key comparison

Strict input validation

Target re-validation before scan

Error sanitization

Session isolation per scan

No internal stack traces leaked

Security Enhancements
🔐 Request size limits (DoS protection)

🛡️ Security headers (defense-in-depth)

🚦 Backend-enforced rate limiting

🌐 CORS fully disabled

📝 Strict schema-based request validation

🎯 Features
Scan Types
Scan Type	Description
passive_only	Passive checks only (no active attacks)
active_full	Full active + passive vulnerability scan
api_openapi	OpenAPI-driven deep API scan
Capabilities
OWASP ZAP active & passive scanning

OpenAPI / Swagger import

Authenticated API scanning

SQL Injection detection

Command Injection detection

XSS testing

Security header analysis

JSON + HTML reports

Real-time scan status tracking

📦 Project Structure
armorist-deeptool-api-scanner/
-------------
├── app/
│   ├── api/
│   │   └── v1/
│   │       └── routes_scan.py
│   ├── services/
│   │   └── zap_service.py
│   ├── schemas/
│   │   └── scan.py
│   ├── core/
│   │   └── config.py
│   └── main.py
├── reports/
│   ├── scan_0.html
│   └── scan_0.json
├── .env.development
├── .env.production
├── .env.example
└── README.md
🔧 Configuration Files
UAT / Development
cp .env.development .env
CORS disabled

API auth disabled

Localhost-only binding

Verbose logging

Production
cp .env.production .env
Strict security settings

Production logging

Localhost-only binding

Backend-enforced authentication

🧪 Testing
Test Scanner Directly (Localhost)
curl http://127.0.0.1:8000/health
Start Scan
curl -X POST http://127.0.0.1:8000/scan \
  -H "Content-Type: application/json" \
  -d '{
    "target": "https://api.example.com",
    "openapi": "https://api.example.com/openapi.json",
    "scan_type": "api_openapi"
  }'
Check Status
curl http://127.0.0.1:8000/scan/status/0
🚀 Deployment
Development (UAT)
cp .env.development .env
python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000
Verify:

curl http://127.0.0.1:8000/health
Production (Systemd)
sudo nano /etc/systemd/system/armorist-api-scanner.service
[Unit]
Description=Armorist Deep API Scanner
After=network.target

[Service]
User=armorist
WorkingDirectory=/opt/armorist-deeptool-api-scanner
ExecStart=/usr/bin/python3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
sudo systemctl daemon-reload
sudo systemctl enable armorist-api-scanner
sudo systemctl start armorist-api-scanner
sudo systemctl status armorist-api-scanner
🔐 Security Considerations
Architecture Advantages
✅ Backend handles auth, subscription, billing
✅ Scanner never exposed to internet
✅ Centralized access control
✅ Easier auditing and monitoring

Firewall Rules
sudo ufw deny 8000
sudo ufw allow from 127.0.0.1 to any port 8000
📊 API Endpoints
(Accessed via backend proxy)

Scans
POST   /backend/api-scanner/scan
GET    /backend/api-scanner/scan/{scan_id}
GET    /backend/api-scanner/scan/{scan_id}/report
GET    /backend/api-scanner/scan/{scan_id}/report/json
Management
GET /backend/api-scanner/health
📈 Monitoring
Logs
journalctl -u armorist-api-scanner -f
Health Check
curl http://127.0.0.1:8000/health
🆘 Troubleshooting
Scanner Not Running
sudo systemctl status armorist-api-scanner
sudo systemctl start armorist-api-scanner
Backend Cannot Connect
curl http://127.0.0.1:8000/health
ps aux | grep uvicorn
📋 Changelog
v1.0.0
Initial release

Deep API scanning via OWASP ZAP

OpenAPI-driven scans

JSON & HTML reporting

Backend-only integration model

📄 License
Proprietary – Armorist Security Platform

✨ Key Points for Armorist.ai
Scanner runs on localhost:8000

Never internet-exposed

Backend API is the single gateway

No CORS / Auth inside scanner

Frontend never talks to scanner directly

Designed for deep API security testing

Built for internal security operations. Ready for production. 🔒
