# LMS Project

A Node.js client application for interacting with LM Studio's large language models locally. This project provides a simple interface to communicate with locally hosted language models through the LM Studio server.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [LM Studio](https://lmstudio.ai/) desktop application
- A compatible language model downloaded through LM Studio

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lms-project.git
cd lms-project
```

2. Install dependencies:
```bash
npm install
```

## Configuration

1. Start the LM Studio server:
```bash
lms server start
```

2. In LM Studio desktop app:
- Load your preferred language model
- Ensure the server is running (default port: 1234)
- Note the model path for configuration

## Usage

1. Run the application:
```bash
npm start
```

2. Example code for interacting with the model:
```javascript
import { LMStudioClient } from '@lmstudio/sdk';

const client = new LMStudioClient();

async function generateResponse(prompt) {
    const response = await client.complete({
    prompt,
    temperature: 0.7,
    maxTokens: 500
    });
    return response;
}
```

3. Command-line interaction:
```bash
> Enter your prompt: What is artificial intelligence?
> AI: Artificial intelligence refers to the simulation of human intelligence...
```

## Development

The source code resides in the `src/` directory. For development purposes:

- Make changes to the source files
- Run the project using `npm start`
- Test your changes with different prompts and models

## Resources & Community

- [LMStudio.js Documentation](https://lmstudio.ai/docs/welcome)
- [LMStudio.js GitHub](https://github.com/lmstudio-ai/lmstudio.js)
- [Discord Community](https://discord.gg/6Q7Xn6MRVS)
- [Twitter Updates](https://twitter.com/LMStudioAI)

## License

This project is licensed under the MIT License - see the LICENSE file for details.