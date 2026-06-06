# Dream Events - Event Management System

**Repository Link:** [https://github.com/AkshayKod/event-management-system](https://github.com/AkshayKod/event-management-system)
Dream Events is a premium, eco-friendly event management platform designed to bring spectacular and sustainable celebrations to life. This full-stack web application allows users to explore services, book events, and read testimonials, while providing an administrative dashboard to manage bookings securely.

## 🚀 Features

### Frontend (UI/UX)
- **Modern Glassmorphism Design:** A premium aesthetic using translucent elements, smooth gradients, and vibrant colors.
- **Micro-Animations:** Interactive elements and smooth scroll animations powered by GSAP and ScrollTrigger.
- **Dynamic Content:** Real-time fetching of user testimonials and bookings.
- **Fully Responsive:** Adapts beautifully across desktops, tablets, and mobile devices.

### Backend & Database
- **RESTful API:** Robust Express.js backend handling routing and JSON parsing.
- **MongoDB Integration:** Seamless data storage using Mongoose schemas.
- **Secure Admin Authentication:** Restricted access to the admin dashboard, protecting sensitive client data.
- **Booking System:** Capture client details, event dates, and contact information directly to the database.

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, Grid), Vanilla JavaScript, GSAP.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB, Mongoose.
- **Other Tools:** CORS, Body-Parser, Dotenv (for environment variables).

## 📂 Project Structure

- `landingpage.html` - The main entry point featuring the Hero section, About Us, Services, and Testimonials.
- `events.html` - Detailed view of available event packages and an FAQ section.
- `gallery.html` - A visual showcase of past events.
- `contact.html` - The booking form where clients can submit their event requests.
- `admin.html` - The secure login portal for administrators.
- `view_adminreport.html` - The protected dashboard for admins to view all bookings and statistics.
- `style.css` - The global stylesheet containing all modern UI/UX definitions.
- `server.js` - The main Express backend handling API requests and MongoDB connections.

## ⚙️ Installation & Setup

1. **Clone the repository or download the source code.**
2. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```
3. **Environment Setup:**
   Ensure your `.env` file is present in the root directory and contains your MongoDB URI:
   ```env
   MONGO_URI=mongodb://localhost:27017/dream-events
   PORT=5000
   ```
4. **Start the Backend Server:**
   ```bash
   node server.js
   ```
5. **Run the Application:**
   Open `landingpage.html` in your web browser (or use a tool like Live Server) to view the application.

## 🛡️ Admin Dashboard Access
On the first run, the backend will automatically generate a default administrator account.
- **URL:** Open `admin.html` in your browser.
- **Username:** `admin`
- **Password:** `password123`

## 🤝 Services Offered
- Weddings
- Birthday Parties
- Corporate Events
- Baby Showers
- Engagements
- Theme Parties