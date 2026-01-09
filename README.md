# sunvolt_demo

Full-stack demo app:

- Backend: Django + Django REST Framework (`backend/`, `api/`)
- Frontend: React (Create React App) (`frontend/`)

## Project Layout

| Path | What it is |
| --- | --- |
| `backend/` | Django project (settings/urls) |
| `api/` | DRF app exposing a simple `MyData` API |
| `frontend/` | React frontend |
| `manage.py` | Django entrypoint |

## Quickstart

### Backend (Django)

1. Configure your database in `backend/settings.py` (currently set up for PostgreSQL).
2. Install dependencies in your virtual environment.
3. Run:

```bash
python3 manage.py migrate
python3 manage.py runserver
```

- API base URL: `http://localhost:8000/api/`
- Admin: `http://localhost:8000/admin/`

### API endpoints

- `GET /api/data/` (list)
- `POST /api/data/` (create)

Example:

```bash
curl -X POST http://localhost:8000/api/data/ \
  -H 'Content-Type: application/json' \
  -d '{"name":"Alice","email":"alice@example.com"}'
```

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

- Dev server: `http://localhost:3000`

