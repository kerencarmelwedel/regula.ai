Regula.ai - Spatial AI One-Pager

This is the official one-pager for Regula.ai, a platform designed to decode urban regulations into spatial data.

🚀 Quick Start (Local Development)

If you haven't been able to run the project locally, follow these exact steps. We use Vite because it is faster and more modern than Create React App.

1. Initialize the Project

Open your terminal in an empty folder and run:

# Create a new Vite project
npm create vite@latest . -- --template react

# Install basic dependencies
npm install


2. Install UI Dependencies

The project requires Tailwind CSS and Lucide Icons. Run:

# Install Tailwind and its peers
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Icons
npm install lucide-react


3. Configuration Files

To make sure the design looks correct, you must update these two files in your project root:

Update tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Update src/index.css (Delete everything and paste this):

@tailwind base;
@tailwind components;
@tailwind utilities;


4. Add the Code

Open src/App.jsx.

Delete all existing content.

Paste the full code from the App.jsx file in the Canvas.

5. Run it!

npm run dev


The terminal will give you a link (usually http://localhost:5173). Open it in your browser.

🌐 Deployment to Vercel

Can I keep my GitHub repo private?

Yes. Vercel supports private repositories even on the Free (Hobby) tier.

Push your code to a Private Repository on GitHub.

Log in to Vercel.

Click Add New > Project.

Import your private regula-ai repository.

Vercel will automatically detect Vite and Tailwind settings. Click Deploy.

🛠 Tech Stack

Framework: React.js (Vite)

Styling: Tailwind CSS

Icons: Lucide-React

Animations: Standard Tailwind transitions & CSS keyframes

© 2026 Regula AI. All rights reserved.