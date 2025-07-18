Thanks for sharing the error, Abubakar. This issue is happening because **Vite 7.x** expects a newer version of Node.js that includes updated support for the `crypto` module. Specifically, the error:

```
TypeError: crypto.hash is not a function
```

means Vite is trying to use a method that doesn’t exist in your current Node.js version.

---

## ✅ Solution: Upgrade Node.js

To fix this, you should upgrade your Node.js version to **at least v20.19.3** or ideally **v22.12+**, which fully supports the required crypto features.

### 🔧 Steps to Fix

1. **Check your current Node version**:
   ```bash
   node -v
   ```

2. **Upgrade Node.js**:
   - Visit [nodejs.org](https://nodejs.org/) and download the **latest LTS version** (v22.x is ideal).
   - Or use a version manager like `nvm`:
     ```bash
     nvm install 22.17.1
     nvm use 22.17.1
     ```

3. **Clean and reinstall your project**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

---

## 🧪 Why This Happens

Vite 7 introduced changes that rely on newer Node APIs, including hashing via `crypto.createHash`. Older Node versions don’t support this properly, which causes the dev server to crash.

---

Let me know once you've upgraded—I'll help you test your React hook script and maybe even add some enhancements like `useEffect` or custom styles!
