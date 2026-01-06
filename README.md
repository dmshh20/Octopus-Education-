# Octopus EDUCATION
**Learn English for free — earn stars, unlock lessons, chat in real-time**

# ENGLISH EDUCATION PLANFORM
**If you are the first time in this platform you can send a form for a trial-session.**
**Tutor will see it in the seperate part of the project that is available only for tutors and admins**
**As soon as tutor accept your form - you can learn with him**
**However, if you wanna learn on your own - there are free courses for you. You can pass them and earn stars(shrimps) and buy locked sets for them. You can get stars for pass sets only one in 24 hours, but you can pass them after first time anyway but already without earning stars**
**There is also a user profile, where you can see a Chart with user progress for every sets, A1,A2,B1 etc, and how many courses he passed(including only for stars)**

## Features
- **Real-time chat** (group & private)  
- **JWT Authentication** (`/auth/signup`, `/auth/signin`)  
- **Earn stars → unlock lessons** (gamification)  
- **Image upload** (Cloudinary)  
- **Rate limiting** (Arcjet — anti-spam)  
- **Responsive UI** (React )


## Tech Stack
| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | React, TypeScript,     |
| Backend     | NestJS, TypeScript             |
| Databases   | PostgreSQL (TypeORM)           |
| Auth        | JWT + bcrypt                   |
| Rate Limit  | Arcjet                         |
| Uploads     | Cloudinary                     |
| Deploy      | Docker                         |


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


## 3
State Management § Database integrity 

Technical Challenges in my project 

🛠 Refactoring: Star Balance Logic
The Problem: Originally, the user's star balance was calculated dynamically by summing up all "Completed Set" records. This created a logic loop where spending stars was impossible because a page reload would simply re-calculate the total from the history, ignoring any purchases.

The Solution: I transitioned to a state-based system where the star balance is stored directly on the User model for persistence. To maintain data integrity, I implemented an Audit Trail (Transaction Logs) that records every "Earn" and "Spend" event. This ensures the balance remains consistent after reloads while providing a transparent history of all transactions.

Recap: 
💼 State Management - a place where we save the current sum
💻Database integrity - a place that provides current sum really exist, for example to prevent situation when user has 1 million stars, you can check logs where he got it

## 4
Solving Race Conditions with AbortController

During the development of my project, I ran into a frustrating bug: after refreshing the page several times in a row, my Star Count and Profile Photo would occasionally turn null or flicker. At first, I thought my Rate Limiter was the only culprit because it was set too low ($max: 5$ requests), causing some requests to be blocked. However, even after increasing the limit, the data still didn't feel right.

I realized I was facing a classic Race Condition. When a user triggers multiple identical requests in a short window, they all run in parallel. Because the database doesn't always respond in the same order, a "Ghost" request (an older, slower one) might finish after the newest one, overwriting the UI with stale or incorrect data.

To solve this properly, I decided to dive deeper into resource management and implemented the Backend Cancellation Pattern using the AbortController API.

⚒️ What is an AbortController? It acts as a "Kill Switch" for the backend. By using req.on('close'), my server now listens for the exact millisecond a user disconnects (like when they reload or close their tab). The moment that happens, it sends an "Abort" signal to my database service.

## 5
Solving the "Locked Content" Problem
The time has come! I’ve started implementing the Purchase Set logic and the Star Decrement system. However, I immediately ran into a roadblock: my Sets were hardcoded in a separate array. Because they were static, I had no way to track which sets were locked or free for a specific user.

The Solution: I moved all the Sets into my Database. Now, the sets are rendered dynamically from the DB the moment a user clicks on "Courses."

The Big Breakthrough: "Heavy Lifting" 🏗 I learned about a powerful Backend pattern called "Heavy Lifting." This is perfect for when you need to cross-reference data before sending it to the client.

How did I implemented it?
💠 DB Models: I created two models: Sets (the store inventory) and UserPurchase (where I store the "receipts" for what a user has bought).
💠 The Logic: On the backend, I compare the allSets list with the UserPurchases for that specific user.
💠 The Result: If a match is found, the set is sent to the frontend with a special flag: isUnlocked: true.

 🏋️‍♀️ Heavy Lifting - it was a struggle. However, after several hours It dawned on me 🙏


## Installation 
1. Docker - **docker compose up --build
2. npm run migration:run
3. npm run start:dev
