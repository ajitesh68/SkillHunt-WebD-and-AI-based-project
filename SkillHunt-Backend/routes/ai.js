const express = require("express");
const { CopilotRuntime, GroqAdapter, copilotRuntimeNextJSAppRouterEndpoint } = require("@copilotkit/runtime");
const { Groq } = require("groq-sdk");

const router = express.Router();
const app = express();

// Route for CopilotRuntime
router.post("/copilot-endpoint", async (req, res) => {
  try {
    const runtime = new CopilotRuntime();
    const groq = new Groq({apiKey: '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'}); // Initialize Groq instance
    const model = "llama3-8b-8192"; // Replace with your actual model name

    // Create an instance of GroqAdapter
    const groqAdapter = new GroqAdapter({ groq, model });
    const serviceAdapter = new GroqAdapter({
        groq, model: "llama3-groq-70b-8192-tool-use-preview",
        disableParallelToolCalls: true,});
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
        runtime,
        serviceAdapter,
        endpoint: "/api/copilot-endpoint",
    });

    // // Handle request using the runtime and GroqAdapter
    // const response = await runtime.handleRequest(req, groqAdapter);
    // res.status(200).json(response);

    const response = await handleRequest(req)

    return response;
  } catch (error) {
    console.error("Error in copilot endpoint:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
