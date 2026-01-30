from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.interaction import router as interaction_router

# 1️⃣ Create FastAPI app FIRST
app = FastAPI()

# 2️⃣ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3️⃣ Include routes AFTER app creation
app.include_router(interaction_router, prefix="/interaction")

# 4️⃣ Test route
@app.get("/")
def root():
    return {"message": "Backend running"}
