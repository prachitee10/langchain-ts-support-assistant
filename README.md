# LangChain TypeScript Support Assistant

This project demonstrates the fundamentals of building an AI application using **LangChain with TypeScript**.

It covers:

- What LangChain solves
- Model connection and setup
- Prompt flow
- Context management
- Memory handling
- Chains
- Agents and tools
- LangSmith tracing and debugging

---

## 1. What LangChain Solves

When developers build AI apps directly with an LLM API, they usually have to manually manage prompts, model calls, tools, memory, output formatting, and debugging.

LangChain helps by giving developers a structured way to connect:

```text
User Input → Prompt → Model → Output Parser → Final Answer
```

For agentic apps, LangChain also supports:

```text
User Input → Agent → Tool Decision → Tool Call → Model Reasoning → Final Answer
```

LangChain is useful because it provides reusable building blocks for chains, agents, tools, memory, and tracing.

---

## 2. Project Idea

This project is a **Support Assistant**.

The assistant can:

1. Answer user questions using a prompt and model.
2. Remember short conversation history.
3. Use tools through an agent.
4. Show how LangSmith can trace each step of the app.

---

## 3. Project Structure

```text
langchain-ts-support-assistant/
│
├── src/
│   ├── index.ts          # Main demo runner
│   ├── chain.ts          # Basic chain example
│   ├── agent.ts          # Agent + tools example
│   ├── memoryDemo.ts     # Memory and context demo
│   └── tools.ts          # Custom tools
│
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Setup Instructions

### Step 1: Install Node.js

Install Node.js from the official website.

Check installation:

```bash
node -v
npm -v
```

### Step 2: Install Packages

```bash
npm install
```

### Step 3: Create `.env` File

Copy `.env.example` and rename it to `.env`.

Add your API keys:

```env
OPENAI_API_KEY=your_openai_api_key_here
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=your_langsmith_api_key_here
LANGSMITH_PROJECT=langchain-ts-support-assistant
```

### Step 4: Run the Project

Run the complete demo:

```bash
npm run dev
```

Run only the chain demo:

```bash
npm run chain
```

Run only the memory demo:

```bash
npm run memory
```

Run only the agent demo:

```bash
npm run agent
```

---

## 5. Basic LLM Application Flow

A basic LangChain TypeScript app follows this flow:

```text
User Question
     ↓
Prompt Template
     ↓
LLM Model
     ↓
Output Parser
     ↓
Final Answer
```

In this project, `chain.ts` demonstrates this flow.

---

## 6. Memory Handling

Memory helps the assistant remember previous conversation turns.

Example:

```text
User: My laptop is overheating.
Assistant: Try cleaning vents and checking background apps.
User: It also shuts down randomly.
Assistant: Since you mentioned overheating earlier, shutdown may be due to thermal protection.
```

This project uses a simple in-memory array to demonstrate short-term memory.

---

## 7. Context Management

Context management means giving the model only the useful information it needs.

This project manages context by:

- Keeping recent conversation history
- Passing support policy text
- Avoiding unnecessary long inputs
- Keeping prompts structured

---

## 8. Chains

A chain connects multiple steps together.

Example:

```text
Prompt → Model → Parser
```

The file `src/chain.ts` shows a simple support-answering chain.

---

## 9. Agents and Tools

An agent can decide whether to use a tool before answering.

This project includes two tools:

1. `orderStatusTool`
2. `supportPolicyTool`

Example:

```text
User asks about refund policy
      ↓
Agent decides to call support policy tool
      ↓
Tool returns policy information
      ↓
Agent generates final answer
```

The file `src/agent.ts` demonstrates this.

---

## 10. LangSmith Tracing

LangSmith helps developers inspect what happened inside an AI app.

It can show:

- Which prompt was sent
- Which model was called
- Which tool was used
- What the model returned
- Where the app failed
- Why unexpected output happened

To enable tracing:

```env
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=your_langsmith_api_key_here
LANGSMITH_PROJECT=langchain-ts-support-assistant
```

After running the app, open LangSmith and check the project trace.

LangSmith is helpful because AI applications are not always predictable. If an agent gives a wrong answer, LangSmith lets developers inspect the full execution path and debug the issue.

---

## 11. Final Explanation

This project demonstrates how LangChain makes AI app development easier by organizing prompts, models, chains, agents, memory, tools, and debugging. The support assistant is small, but it shows the same basic structure used in real AI products.
