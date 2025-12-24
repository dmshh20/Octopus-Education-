# Octopus EDUCATION
**Learn English for free — earn stars, unlock lessons, chat in real-time**


## Features
- **Real-time chat** (group & private)  
- **JWT Authentication** (`/auth/signup`, `/auth/signin`)  
- **Earn stars → unlock lessons** (gamification)  
- **Image upload** (Cloudinary)  
- **Rate limiting** (Arcjet — anti-spam)  
- **Responsive UI** (React + Tailwind)


## Tech Stack
| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | React, TypeScript, Tailwind    |
| Backend     | NestJS, TypeScript             |
| Real-time   | Socket.IO                      |
| Databases   | PostgreSQL (TypeORM) + MongoDB Atlas |
| Auth        | JWT + bcrypt                   |
| Rate Limit  | Arcjet                         |
| Uploads     | Cloudinary                     |
| Deploy      | Sevalla + Docker               |


Technical Challenges
## 1 
**Refactoring: Star Balance Logic**
The Problem: Originally, the user's star balance was calculated dynamically by summing up all "Completed Set" records. This created a logic loop where spending stars was impossible because a page reload would simply re-calculate the total from the history, ignoring any purchases.

The Solution: I transitioned to a state-based system where the star balance is stored directly on the User model for persistence. To maintain data integrity, I implemented an Audit Trail (Transaction Logs) that records every "Earn" and "Spend" event. This ensures the balance remains consistent after reloads while providing a transparent history of all transactions.

## 2
**Solving Ghost Overwrites & Race Conditions**
The Problem: While testing rapid page reloads, my Stars Count and Profile Photo would occasionally disappear or show null. This was caused by Race Conditions: older, slower requests were finishing after newer ones, overwriting the UI with "Ghost" (stale) data.

The Fix: I implemented the Backend Cancellation Pattern using the AbortController API to make my server "connection-aware."
How it works: 
Listen: The server listens for the req.on('close') event (triggered when a user reloads or leaves).
Abort: It immediately signals the database service to stop working on that specific request.
Survivor: Only the very last request is allowed to finish and update the UI. All previous "Ghost" requests are killed before they can send "bad" data to the screen.
**The Result**
Stable UI: No more flickering or null values because old requests are silenced. **
Database Efficiency: Connections are released back to the Pool instantly, preventing "Database Starvation" during high traffic.
