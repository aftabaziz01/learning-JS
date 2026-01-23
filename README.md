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

