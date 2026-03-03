# SmartDemand AI

**Demand Forecasting & Inventory Optimization System**

SmartDemand AI is a full-stack web application that uses machine learning techniques to predict product demand and help retailers and businesses optimize their inventory levels to reduce waste and maximize profit.

---

## Features

- 📊 **Demand Forecasting Dashboard** — Real-time KPIs including predicted demand, recommended stock levels, and model accuracy.
- 📈 **Sales & Forecast Visualization** — Interactive line charts comparing historical sales data with ML-predicted demand.
- 📁 **CSV Data Upload** — Drag & drop interface for uploading historical sales records.
- 🎯 **Model Performance Metrics** — Detailed accuracy reports with RMSE and MAE error metrics.
- 🌙 **Dark Mode UI** — Premium dark-themed design with teal/cyan accent colors.

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 18, TypeScript, Vite          |
| Styling   | TailwindCSS, shadcn/ui components   |
| Charts    | Recharts                            |
| Routing   | React Router v6                     |
| Forms     | React Hook Form + Zod               |
| Icons     | Lucide React                        |

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/smartdemand-ai.git
cd smartdemand-ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page-level components (Dashboard, Upload, etc.)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── main.tsx          # App entry point
```

---

## Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` folder.

---

## License

MIT License — feel free to use, modify, and distribute this project.
