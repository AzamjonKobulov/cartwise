import { ChatOpenAI } from "langchain/chat_models/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { PRODUCT_LOOKUP } from "./tools/product-search"; // Import the custom tool
import { BufferMemory, ChatMessageHistory } from "langchain/memory";

const pastMessages:any[] = [];

const memory = new BufferMemory({
  chatHistory: new ChatMessageHistory(pastMessages),
  memoryKey: "chat_history",
  inputKey: "input",
  outputKey: "output",
  returnMessages: true,
});

export const run = async () => {
  process.env.LANGCHAIN_HANDLER = "langchain";
  const model = new ChatOpenAI({ temperature: 0 });
  const tools = [
    PRODUCT_LOOKUP, // Add the custom tool here
  ];


  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "chat-conversational-react-description",
    verbose: true,
    memory: memory
  });
  console.log("Loaded agent.");

  const input0 = "hi, i am bob";
  const result0 = await executor.call({ input: input0, inputKey: 'input', chat_history: pastMessages, outputKey: "text" });
  console.log(`Got output ${result0.output}`);
/*
  const input1 = "whats my name?";
  const result1 = await executor.call({ input: input1, chat_history: pastMessages });
  console.log(`Got output ${result1.output}`);

  const input2 = "Tell me about banana";
  const result2 = await executor.call({ input: input2, chat_history: pastMessages });
  console.log(`Got output ${result2.output}`);*/
};

run();
