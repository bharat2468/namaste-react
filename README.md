# React Learning Project

This repository contains projects and exercises completed while learning React through an online course. It includes a variety of React components, hooks, state management techniques, and other fundamental concepts and best practices in React development.

# Swiggy Clone - React E-commerce Project

## Deployment Link
[Live Demo](https://namaste-react-mu.vercel.app/)

**Note:** To use this application, you need to install the **CORS plugin for Chrome**. This is necessary for the app to work properly with the Swiggy API.

## Technologies Used
- **React**
- **Redux Toolkit**
- **React Router**
- **Tailwind CSS**
- **Daisy UI**
- **Parcel Bundler**
- **Custom Hooks** for data fetching

## Project Overview
This project is a Swiggy clone built with React, showcasing various features of a food delivery e-commerce platform. The codebase follows the **single responsibility principle**, ensuring maintainable and readable code with a proper file structure.

## Features

### Home Page
- Displays all restaurants
- **Search functionality** to find specific restaurants
- **Filter function** to show restaurants with ratings above 4
- **Shimmer UI** for better user experience while loading

### Restaurant Page
- Opens when a restaurant card is clicked on the home page
- Uses **dynamic routing** for each restaurant
- Displays detailed restaurant information
- Shows food items categorized using an **accordion component**

### Cart Page
- Displays items added to the cart
- Utilizes **Redux Toolkit** for state management of cart items
- Displays a user-friendly UI for an **empty cart**

### Theme Toggle
- Supports **light and dark themes**
- Theme can be toggled using a **theme switcher** located in the header

### Network Status
- Avatar in the header shows the **connection status** (offline or online)

### Additional Pages
- About page
- Contact page
- Grocery page(**lazy loaded** for improved performance)

### Responsive Design
- All pages are **responsive** and work well on various device sizes

## Installation and Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## CORS Plugin Requirement
This application requires the **CORS plugin for Chrome** to work properly. Please install the plugin before using the app.

## Contributing
Feel free to fork this project and contribute. Pull requests are welcome!
