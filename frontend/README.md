# gvm_kpi

Small demos/prototypes for KPI-related work, plus a full-stack sample app (`sunvolt_demo`).

## Project Layout

| Path | What it is |
| --- | --- |
| `sunvolt_demo/backend/` | Django project (settings/urls) |
| `sunvolt_demo/api/` | Django REST Framework app (a simple `MyData` API) |
| `sunvolt_demo/frontend/` | React (Create React App) frontend |
| `main_old.py` | Standalone FastAPI example (lead scoring + MySQL signup) |

---

## sunvolt_demo (Django + React)

### Prerequisites

- Python 3.x (`python3`)
- Node.js + npm
- PostgreSQL (Django settings are currently configured for Postgres)

### 1) Backend (Django)

From the repo root:

```bash
cd sunvolt_demo
python3 -m venv venv
source venv/bin/activate

python3 -m pip install -U pip
# Install required packages for your environment (Django, DRF, CORS, Postgres driver, etc.)

python3 manage.py migrate
python3 manage.py runserver
```

- API base URL: `http://localhost:8000/api/`
- Admin: `http://localhost:8000/admin/`

#### Database configuration

Update your local DB settings in `sunvolt_demo/backend/settings.py` (host/port/user/password/dbname) before running migrations.

### 2) API Endpoints

`MyData` list/create:

- `GET /api/data/`
- `POST /api/data/`

Example:

```bash
curl -X POST http://localhost:8000/api/data/ \
  -H 'Content-Type: application/json' \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

### 3) Frontend (React)

```bash
cd sunvolt_demo/frontend
npm install
npm start
```

- Dev server: `http://localhost:3000`

If you call the Django API from the frontend, ensure your frontend points to `http://localhost:8000` (or set up a CRA proxy).

---

## `main_old.py` (FastAPI example)

Endpoints:

- `POST /predict_score`: rule-based lead scoring
- `POST /signup`: inserts a user into a MySQL table (`users`) via `pymysql`

Run:

```bash
python3 -m pip install fastapi uvicorn pymysql
uvicorn main_old:app --reload
```

Update the MySQL connection parameters inside `main_old.py` for your environment.

