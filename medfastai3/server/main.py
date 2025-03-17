from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from socketio import AsyncServer
from socketio.asgi import ASGIApp
from server.database import init_db
from server.auth import router as auth_router
from server.routes.user_routes import router as user_router


# Initialize FastAPI app
app = FastAPI()

# Allow frontend to connect (Adjust the origin based on your frontend URL)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update this if your frontend runs on a different port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Socket.IO server
sio = AsyncServer(async_mode='asgi', cors_allowed_origins='*')
app.mount("/socket.io", ASGIApp(sio))

@app.on_event("startup")
def on_startup():
    """Runs on server start"""
    init_db()

# Include authentication routes
app.include_router(auth_router, prefix="/auth")

# Include user-related routes
app.include_router(user_router, prefix="/users")

@app.get("/")
def read_root():
    """Root route"""
    return {"message": "Welcome to the FastAPI backend!"}

@app.get("/health")
def health_check():
    """Health check route"""
    return {"status": "healthy"}

# Socket.IO Events
@sio.event
async def connect(sid, environ):
    """Handle client connection"""
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    """Handle client disconnection"""
    print(f"Client disconnected: {sid}")
