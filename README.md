

---

# FlowUI.js

FlowUI is a lightweight, zero-configuration JavaScript library that instantly makes any website feel **smooth, animated, and modern** — without requiring users to write or add any CSS.

Just include one script and initialize it. That’s it.

---

## 🚀 Why FlowUI?

Most animation libraries require:
- Writing custom CSS
- Adding classes everywhere
- Complex configuration

FlowUI is different.

FlowUI:
- Works out of the box
- Injects its own minimal internal styles
- Automatically enhances UI elements
- Keeps performance in mind
- Stays simple and extensible

---

## ✨ Features

- Smooth scroll reveal animations
- Animated buttons and links (hover & click)
- Optional smooth scrolling
- No CSS required from the user
- Lightweight and fast
- Mobile-friendly
- Uses anime.js internally for animations
- Simple and clean API

---

## 📦 Installation

### Option 1: Direct GitHub usage (recommended)

```html
<script src="https://raw.githubusercontent.com/Bytewave-coder/flowui-js/main/dist/flowui.min.js"></script>
```

---

## ⚡ Quick Start
```
<script src="https://raw.githubusercontent.com/Bytewave-coder/flowui-js/main/dist/flowui.min.js"></script>
<script>
  FlowUI.init();
</script>
```
That’s all you need.

No CSS. No setup. No configuration.


---

## ⚙️ Configuration Options

All features are enabled by default, but you can control them:
```
FlowUI.init({
  reveal: true,        // Scroll reveal animations
  buttons: true,       // Button & link animations
  smoothScroll: true   // Enable smooth scrolling
});

Default behavior

FlowUI.init(); // enables everything

```
---

## 🧠 How FlowUI Works

Injects minimal internal CSS automatically

Detects common elements (sections, text, images, buttons)

Uses IntersectionObserver to trigger animations

Enhances buttons with subtle scale feedback

Keeps animations smooth and lightweight

Does not break existing layouts



---

## 📁 Project Structure

flowui-js/
├── src/
│   ├── flowui.js        # Source code
│   └── anime.min.js    # Animation engine
├── dist/
│   └── flowui.min.js   # Production build (use this)
└── README.md

Important

Users should always use the file inside dist/.


---

🌍 Browser Support

FlowUI works on all modern browsers:

Chrome

Firefox

Edge

Safari

Mobile browsers


(No special polyfills required.)


---

🧪 Example Use Cases

Portfolio websites

Landing pages

Blogs

Documentation sites

Static websites

Personal projects


Anywhere you want smooth UI without effort.


---

🛠 Development Notes

Source code lives in src/

Production-ready file lives in dist/

anime.js is included internally

The library is framework-agnostic

Can be extended with more UI components later



---

🔮 Planned Features

Advanced animation presets

Performance smart-guard (avoid over-animating)

UI components (toast, modal, ripple)

CDN publishing via jsDelivr

Versioned releases



---

📜 License

MIT License

You are free to:

Use

Modify

Distribute

Include in commercial projects



---

🤝 Contributing

Contributions are welcome.

If you want to:

Report a bug

Suggest a feature

Improve performance


Open an issue or submit a pull request.


---

⭐ Author

Created and maintained by Bytewave-coder

If you like the project, consider giving it a ⭐ on GitHub.

---

