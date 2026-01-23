# Armorist DeepTool API Scanner

**Internal Deep API Security Scanner (OWASP ZAP Powered)**  
**Purpose:** Deep, authenticated API vulnerability scanning  
**Exposure:** Internal only (NOT internet-facing)

---

## Overview

Armorist DeepTool API Scanner is an **internal backend service** built to perform
**deep security scanning of APIs** using **OWASP ZAP**.

This scanner is **not exposed publicly** and is **never called directly by frontend clients**.
All access is strictly routed through the **Armorist Backend API**, which handles:

- Authentication
- Authorization
- Subscription & billing
- Rate limiting
- User validation

The scanner’s only responsibility is **security scanning**.

---

## Architecture

Frontend (Next.js)
|
v
Armorist Backend API
(Auth, RBAC, Billing)
|
v
DeepTool API Scanner (localhost:8000)
|
v
OWASP ZAP (daemon)

---

## What This Scanner Does

- Deep API vulnerability scanning
- OWASP ZAP Active & Passive scans
- Authenticated API testing
  - API Key (header-based)
  - Bearer Token (JWT / OAuth tokens)
- OpenAPI / Swagger based API discovery
- Crawl-based scanning if OpenAPI not provided
- Scan progress tracking
- HTML report generation
- JSON report generation (frontend-friendly)

---

## What This Scanner Does NOT Do

- User authentication
- Subscription checks
- Payment handling
- Rate limiting
- Frontend validation
- Public exposure

All of the above are handled by the Armorist backend.

---

## Vulnerability Coverage

This scanner detects vulnerabilities supported by OWASP ZAP, including:

- SQL Injection
- Command Injection
- Cross-Site Scripting (XSS)
- Server-Side Request Forgery (SSRF)
- Insecure HTTP Headers
- Authentication misconfigurations
- Authorization issues (IDOR patterns via ZAP)
- Sensitive data exposure
- OWASP API Top 10 (where applicable)

---

## Scan Types

| Scan Type | Description |
|---------|-------------|
| `active_full` | Full active + passive scan (default) |
| `api_openapi` | OpenAPI-driven deep API scan |
| `passive_only` | Passive scan only |

---

## API Input

### Required Field

- `target`  
  Base API URL  
  Example: `https://api.example.com`

### Optional Fields

- `openapi` – OpenAPI / Swagger spec URL
- `api_key` – API key for header-based auth
- `auth_token` – Bearer token for authenticated APIs
- `scan_type` – Type of scan (`active_full`, `api_openapi`, `passive_only`)

---

## Example Scan Request

```json
{
  "target": "https://uat-v1.armorist.ai",
  "openapi": "https://uat-v1.armorist.ai/openapi.json",
  "api_key": "**************",
  "scan_type": "api_openapi"
}
If openapi is not provided, the scanner falls back to crawl-based discovery.

  "target": "https://uat-v1.armorist.ai",
  "openapi": "https://uat-v1.armorist.ai/openapi.json",
  "api_key": "**************",
  "scan_type": "api_openapi"
}
If openapi is not provided, the scanner falls back to crawl-based discovery.

Internal API Endpoints
⚠️ Internal use only – consumed by Armorist backend

Scan Control
| Method | Endpoint                      | Description          |
| ------ | ----------------------------- | -------------------- |
| POST   | `/scan`                       | Start a new scan     |
| GET    | `/scan/status/{scan_id}`      | Get scan progress    |
| GET    | `/scan/report/{scan_id}`      | Download HTML report |
| GET    | `/scan/report/json/{scan_id}` | Fetch JSON report    |

JSON Report Format

The JSON report is designed for frontend visualization.
{
  "scan_id": "0",
  "summary": {
    "critical": 1,
    "high": 3,
    "medium": 5,
    "low": 7,
    "info": 10
  },
  "vulnerabilities": [
    {
      "name": "SQL Injection",
      "risk": "High",
      "confidence": "High",
      "url": "/api/users",
      "param": "id",
      "attack": "1 OR 1=1",
      "evidence": "SQL syntax error",
      "description": "Unsanitized input in SQL query",
      "solution": "Use parameterized queries",
      "cwe": 89,
      "wasc": 19
    }
  ]
}

Project Structure
armorist-deeptool-api-scanner/
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
└── README.md

Configuration
Environment Variables
ZAP_URL=http://127.0.0.1:8080
ZAP_API_KEY=********

Running the Scanner
Start OWASP ZAP
zaproxy -daemon -port 8080 -config api.disablekey=true

Security Model

Scanner binds to 127.0.0.1

Not exposed to the internet

Backend is the only consumer

Firewall blocks external access

Clear separation of responsibilities

Health Check
curl http://127.0.0.1:8000/health

Summary

Internal-only API security scanner

Powered by OWASP ZAP

Deep, authenticated API scanning

Backend-controlled access

Frontend consumes structured JSON reports

Designed for Armorist production architecture
