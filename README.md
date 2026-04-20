# AI-Powered Claim Orchestrator

## Architectural Overview & Design Decisions

Given the strict 2-hour constraint and the high complexity of the heterogeneous `processDetails` array, my primary focus was establishing a bulletproof, scalable architecture rather than just a cosmetic facade.

1. **Polymorphic UI via Component Registry (O(1) Complexity):** The most critical architectural decision was avoiding unmaintainable `if/else` or `switch/case` clusters to render the timeline nodes. I implemented a strict Component Registry Pattern. The `TimelineNodeRenderer` dynamically resolves the correct React component based on the node's identifier with O(1) lookup time. Adding a new claim step type in the future requires zero changes to the core rendering engine.

2. **Proactive UX & Touch-Friendly Interactions:**
   To fulfill the "touch-friendly" requirement, I strictly avoided hidden `hover` states for critical actions.
   - **Immediate Edit Mode:** When a user dynamically inserts an "Information Note", it immediately enters an editable state without requiring secondary clicks (no double-click anti-patterns).
   - **Chronological Logic:** Insert buttons are mathematically constrained to only appear _between official steps_, preventing UI clutter from consecutive custom nodes.

3. **Dynamic State Mutations (Zustand):** I utilized Zustand to handle the "Dynamic Node Management" requirement (Insert & Remove). The global store handles complex array mutations (inserting custom notes at specific indexes and deleting them) without prop-drilling, ensuring UI reactivity remains intact.

4. **The "3-Second Rule" Layout:**
   The dashboard answers the user's core questions instantly. The header prominently displays `Current Status` and `Estimated Remaining Time`. If an action is required (e.g., missing documents in the Deduction Reason node), a red alert banner immediately directs the user's attention. The layout is mobile-first (stacked) and shifts to a grid on desktop to preserve hierarchy.

## Future Improvements (Post-Deadline)

- **Real LLM Integration:** Connect the simulated `Explain with AI` and `Document Analyzer` delays to real serverless edge functions pointing to OpenAI or Claude APIs for structured JSON responses.
- **Framer Motion Transitions:** Add smooth enter/exit animations for dynamically inserted/removed nodes to improve the perceptual performance.
- **Persistent Storage:** Implement Zustand's `persist` middleware to save timeline mutations to `localStorage` or sync them back to a backend database.
- **Test Coverage:** Implement unit tests for the `NodeRegistry` resolution logic and Zustand store mutations using Jest.

## AI Tools Used

As permitted, I utilized AI strategically as an architectural assistant:

- **Boilerplate & Typings:** Accelerated the creation of Zod schemas and TypeScript interfaces from the raw JSON payload.
- **Strict Implementation:** I explicitly directed the AI to follow the Component Registry pattern and restricted it from using standard `if/else` rendering or adding code comments, ensuring a clean, self-documenting codebase.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ebrarhosgul/AI-Powered-Claim-Orchestrator
   cd ai-powered-claim-orchestrator
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
4. **Access the application:**
   Open http://localhost:3000 in your browser.
