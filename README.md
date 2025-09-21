# Pilgrim Crowd Management

A simple crowd management system for pilgrims.

This project allows users to:  
- Register and log in  
- Book tokens for facilities  
- View real-time crowd status  
- Send emergency alerts (SOS)

## Project Structure

- `backend/` → Node.js API (Express + PostgreSQL)  
- `frontend/` → React Native App (Expo)  
- `ml/` → Crowd detection / mock data scripts  
- `docs/` → API documentation, project notes

## Overview

- Users use the mobile app to interact with the system.  
- Backend APIs handle authentication, bookings, crowd data, and emergency alerts.  
- ML module (or mock data script) estimates crowd density and updates backend.  
- Admin (later phase) can view crowd analytics and manage resources.

## Technology Stack

- **Frontend:** React Native (Expo)  
- **Backend:** Node.js, Express, PostgreSQL  
- **AI/ML:** Python scripts for crowd detection (mock or real data)  
- **Dev Tools:** Git, Docker, VSCode
