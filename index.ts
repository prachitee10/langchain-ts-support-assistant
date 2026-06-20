import "dotenv/config";
import { runChainDemo } from "./chain.js";
import { runMemoryDemo } from "./memoryDemo.js";
import { runAgentDemo } from "./agent.js";

async function main() {
  console.log("LangChain TypeScript Support Assistant");
  console.log("--------------------------------------");

  await runChainDemo();
  await runMemoryDemo();
  await runAgentDemo();

  console.log("\nDemo completed. Check LangSmith for traces if tracing is enabled.");
}

main().catch((error) => {
  console.error("App failed:", error);
  process.exit(1);
});
