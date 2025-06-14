# 🛠️ Contributing Guidelines

Thank you for your interest in contributing to this project! Please follow the steps below to set up your development environment and contribute effectively.

## 🚀 Getting Started

### 1. Fork the Repository
Instead of cloning directly, please fork the repository to your own GitHub account:
- Go to the top-right corner of this repo and click **Fork**

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME
```

### 3. Create a New Branch
Always create a separate branch for your changes:
```bash
git checkout -b your-feature-branch
```

## 💻 Jekyll Setup (Development Environment)

This project is powered by **Jekyll**. Make sure you have the necessary environment set up.

### ✅ Requirements
- Ruby (version 2.5.0 or higher recommended)
- Bundler
- Jekyll

### 📦 Install Dependencies
If you haven't already, install Jekyll and Bundler:
```bash
gem install bundler jekyll
```

Then install project dependencies:
```bash
bundle install
```

### ▶️ Run Locally
To serve the site locally:
```bash
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser to view the site.

## 📤 Making Contributions

1. Make your changes in your branch
2. Test your changes locally
3. Commit with a clear message:
   ```bash
   git add .
   git commit -m "Add: [Short description of feature or fix]"
   ```
4. Push to your fork:
   ```bash
   git push origin your-feature-branch
   ```
5. Open a **Pull Request** to the `main` branch of the **mother repo**


⚠️ **Warning**  
You should use your repo name as the baseURL in **_config.yml** - otherwise it will give you deployement errors.
```bash
baseurl: "/<repo-name>"
```


## 🙏 Guidelines

- Follow consistent code style
- Test your changes before submitting
- One feature/fix per pull request
- Reference related issues (if any)

---

We appreciate your contributions and look forward to collaborating with you!