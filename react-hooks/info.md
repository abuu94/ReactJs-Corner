That's a great way to get hands-on with React hooks, Abubakar! Here's a step-by-step guide to run that script locally on your machine using a simple React setup:

---

## 🛠 Step 1: Set Up Your React Environment

You’ll use **Vite** for a fast and lightweight setup (much quicker than Create React App).

### ✅ Install Node.js
Make sure Node.js is installed. You can check with:
```bash
node -v
npm -v
```
If not installed, download it from [nodejs.org](https://nodejs.org/).

### ✅ Create a React App with Vite
Open your terminal and run:
```bash
npm create vite@latest react-hooks-demo --template react
cd react-hooks-demo
npm install
```

---

## 📁 Step 2: Replace the Default Code

### 🔄 Update `src/App.jsx`
Replace the contents of `App.jsx` with your hook example:

```jsx
import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={() => setColor("red")}>Red</button>
      <button type="button" onClick={() => setColor("pink")}>Pink</button>
      <button type="button" onClick={() => setColor("green")}>Green</button>
    </>
  );
}

export default FavoriteColor;
```

### 🔄 Update `src/main.jsx`
Make sure it looks like this:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import FavoriteColor from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteColor />
  </React.StrictMode>
);
```

---

## 🚀 Step 3: Run Your App

In the terminal, start the development server:
```bash
npm run dev
```

Then open the local URL (usually `http://localhost:5173`) in your browser. You’ll see your interactive color picker powered by React hooks!

---

## 💡 Bonus Tips

- Try adding more buttons or use `select` dropdowns to explore different UI controls.
- Use `useEffect` to log changes to the color or trigger side effects.
- Style it with Bootstrap or Tailwind to make it visually engaging.

Would you like help adding `useEffect` or styling it with Bootstrap next?
