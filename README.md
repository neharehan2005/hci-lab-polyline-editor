## 👤 My Contribution (Design Phase)

### 🧩 My Role

**Phase 3 — Design (HCI)**

### ✨ What I Did

* Designed the **interaction model** (mode-based direct manipulation)
* Created **UI layout structure** (Top bar, Canvas, Status bar)
* Developed detailed **task flows** (Draw, Move, Delete, Refresh)
* Applied core **HCI principles**:

  * Feedback
  * Visibility of system status
  * Consistency
  * Affordances
  * Error prevention & recovery (Undo/Redo)
* Designed **wireframe and interface behavior**
* Defined **mode-to-action mapping** (keyboard + mouse interaction)
* Planned **interactive prototype using HTML5 Canvas**

### 📄 My Work

See documentation:


`/docs/Phase3_Design_HCI_PolylineEditor.pdf`


`/docs/DesignPhase.md`


`/assests/Wireframe.png`


`/assests/TaskFlow-Draw.png`


`/assests/TaskFlow-Move.png`


`/assests/TaskFlow-Delete.png`
### ⚠️ Challenges Faced

* Making the UI **intuitive without clutter**
* Designing a clear **mode-based system** to avoid user confusion
* Deciding **button placement and interaction flow**
* Balancing **simplicity vs functionality** (mode-based vs tool-based design)
* Handling **accurate point selection (nearest-point threshold)**

### 🧠 Key Design Decisions

* Used **mode-based interaction** to reduce ambiguity
* Added **persistent mode indicator** for clarity
* Implemented **hover highlight** for better affordance
* Included **Undo/Redo** for error recovery
* Used **status bar feedback** instead of intrusive popups

### 🛠 Main Implementation

* Implementation completed collaboratively
* Design and interaction logic by: **Neha Rehan B23110006131**

### 🔗 Original Repository

(https://github.com/Sana-212/hci-lab-polyline-editor.git)


# Polyline Editor

An interactive web application for creating, editing, and managing multiple polylines on a canvas. The **Polyline Editor** allows users to draw, move, delete, and style polylines in real-time with intuitive controls and visual feedback.

---

## 🌟 Key Features

- **Draw Mode:** Click to add points and create polylines.
- **Move Mode:** Select and drag points to reposition them.
- **Delete Mode:** Remove individual points from polylines.
- **Undo / Redo:** Revert or restore changes at any step.
- **Clear Canvas:** Remove all polylines and start fresh.
- **Refresh Canvas:** Redraw all polylines while maintaining styles.
- **Export as PNG:** Download the current canvas view.
- **Styling Options:**  
  - Line color & width  
  - Point color & radius  
- **Keyboard Shortcuts:**  
  - `Ctrl+Z` → Undo  
  - `Ctrl+Y` → Redo  
  - `Ctrl+S` → Export PNG  
  - `Ctrl+Delete` → Clear Canvas  
  - `B` → Switch to Draw mode  
  - `M` → Switch to Move mode  
  - `D` → Switch to Delete mode  
  - `R` → Refresh  
  - `Q` → Quit

---

## 🛠 Implementation Details

- **Canvas-based drawing:** Uses HTML `<canvas>` and JavaScript for dynamic rendering.
- **Mouse interactions:**  
  - Hovering over points highlights them with a glow effect and tooltip status.  
  - Real-time point preview in Draw mode.
- **State Management:**  
  - Supports **undo/redo** stacks for all drawing actions.
  - Maintains current polyline and all saved polylines.
- **Performance:** Limited to **100 polylines** for optimal performance.
- **Responsive Layout:** Canvas and editor panels adapt to screen size with CSS flexbox and relative units.

---

## 🎨 Styling & UI

- Modern, clean design with gradient headers and soft shadows.
- Left panel for **styling controls** (line/point color and size).
- Top toolbar for **mode selection, actions, and export options**.
- Bottom status bar provides **real-time feedback** on actions and hovered points.

---

## 📂 Folder Structure
```
project-root/
│
├── code/         # All working project code
│   ├── index.html
│   ├── style.css
│   └── script.js
│
|
├── doc/          # Phase documentation (Markdown + PDF)
│
|
├── assets/       # Images, screenshots, diagrams
|    ├── Wireframe.png
│
├── README.md     # Project overview and instructions
|
|
├── docs/
    ├── DesignPhase.md
    ├── Phase3_Design_HCI_PolylineEditor.pdf
```
---

## 🚀 How to Run

1. **Clone the repository:**  
```bash
- git clone https://github.com/Sana-212/hci-lab-polyline-editor.git
```
2. **Open the project:**
- Open code/index.html in a modern browser.
3. **Use the application:**
- Start drawing polylines, moving points, or deleting points using the toolbar or keyboard shortcuts.
- Export your drawing as PNG using the Export button or Ctrl+S.

---

## ⚡ Notes
- Maximum 100 polylines can be drawn; exceeding this limit will show a warning.
- Quit (Q) clears the canvas and closes the application interface.
- All changes are reflected immediately in the status bar.

## 👨‍💻 Technology Stack
- HTML5, CSS3
- Vanilla JavaScript (ES6+)
- Canvas API for rendering
- Flexbox and CSS gradients for responsive layout
