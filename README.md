# PanInsight – AI-Powered Pancreatic Cancer Detection

PanInsight is a medical web application that helps users analyze CT and MRI scans for early signs of pancreatic cancer using AI. It's designed to be clean, secure, and accessible on both mobile and desktop.

This project isn’t just for doctors — anyone with a scan and the right to use it can run an analysis. Every feature is built with privacy, consent, and clarity in mind.

---



### 1. **Home Page**
- Clean landing page with a short pitch and a “Start Diagnosis” button.
- Highlights how the app works in three steps.
- Fully responsive and mobile-first.
- No login, no data collection, no distractions.

### 2. **Upload Page**
- Users can upload `.dcm`, `.jpg`, `.jpeg`, or `.png` files.
- Drag and drop support (desktop) and tap-to-upload (mobile).
- Mandatory consent checkbox before analysis begins.
- File preview with basic info.
- Fully styled and secure, nothing gets analyzed or sent anywhere without permission.

### 3. **Image Viewer**
- After clicking “Analyze,” the user sees an interactive image display.
- Supports:
  - Zoom in/out
  - Rotation
  - Contrast adjustment
  - Reset view
- All controls happen on the frontend — the image file itself stays untouched.
- Empty overlay container is ready for AI results (bounding boxes, heatmaps, etc.).

---

## What Needs To Be Done

### 4. **AI Integration & Backend**
- Connect backend to the pancreatic cancer detection model developed by Professor Debesh Jha.
- Inputs: medical scan
- Outputs: confidence scores, lesion coordinates, segmentation or heatmap overlays
- Build a secure backend using Java (Spring Boot or similar).
- Accept uploaded scan files.
- Forward to the AI analysis service.
- Handle response, errors, and logging.
- Return AI output to the frontend as JSON.


### 5. **Display AI Results**
- Overlay detection boxes on the image.
- Show confidence levels and tumor info.
- Add toggle for showing/hiding heatmap.
- Provide “Confirm” or “Reject” buttons for user to validate AI suggestions.

### 6. **Export / Download Report**
- Let users download a basic PDF or image-based report of the scan + AI output.
- Include metadata like date, consent, and detection details.

### 7. **Backend Setup (Technical)**
- FastAPI or Express backend (TBD)
- Endpoint to receive and parse scan
- Connect to AI model (PyTorch or TensorFlow)
- Handle errors, timeouts, and failed predictions gracefully

---

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **AI Service**: Python (to be integrated) - Professor Debesh Jha
- **Backend**: Java Spring Boot
- **Hosting Plan**: Likely Vercel (frontend) + Render or EC2 (backend)

---

## Notes

- No tracking, no 3rd-party analytics — this app respects data boundaries.
- Every step is intentional: users stay in control the entire time.
- Designed to look great on mobile, not just desktop.

---

## In Progress

- [ ] Backend file handler
- [ ] AI model API interface
- [ ] Overlay rendering logic
- [ ] Downloadable report UI
- [ ] Live demo + deployment

