// index.js
const { LMStudioClient } = require("@lmstudio/sdk");

const MODEL_PATH = "TheBloke/phi-2-GGUF/phi-2.Q4_K_S.gguf";

async function cleanup(client) {
try {
    if (client) {
    await client.close();
    }
} catch (error) {
    console.error("Error during cleanup:", error.message);
}
}

async function main() {
let client = null;

try {
    // Validate model path
    if (!MODEL_PATH || typeof MODEL_PATH !== "string") {
    throw new Error("Invalid model path provided");
    }

    // Create a client to connect to LM Studio
    client = new LMStudioClient();
    console.log("Connecting to LM Studio...");

    // Load the model with error handling
    console.log(`Loading model: ${MODEL_PATH}`);
    const model = await client.llm.load(MODEL_PATH).catch((error) => {
    throw new Error(`Failed to load model: ${error.message}`);
    });

    // Validate model loaded successfully
    if (!model) {
    throw new Error("Model failed to load properly");
    }

    console.log("Model loaded successfully. Generating response...");

    // Generate prediction with input validation
    const messages = [
    { role: "system", content: "You are a helpful AI assistant." },
    { role: "user", content: "What is the meaning of life?" },
    ];

    const prediction = model.respond(messages);
    
    // Stream the response
    for await (const text of prediction) {
    process.stdout.write(text);
    }
    
    console.log("\nPrediction completed successfully");
} catch (error) {
    console.error("\nError:", error.message);
    process.exit(1);
} finally {
    // Ensure cleanup happens regardless of success or failure
    await cleanup(client);
}
}

// Handle uncaught errors
process.on("uncaughtException", (error) => {
console.error("Uncaught Exception:", error.message);
process.exit(1);
});

process.on("unhandledRejection", (error) => {
console.error("Unhandled Rejection:", error.message);
process.exit(1);
});

main();
