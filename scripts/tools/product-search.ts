import { DynamicTool } from "langchain/tools";


type MockDatabaseType = {
  [key: string]: string;
};
// Mock function to simulate database lookup
const lookupProductByName = async (productName: string) => {
  // Replace this with actual database lookup logic
  const mockDatabase:MockDatabaseType = {
    "apple": "Apple is a fruit.",
    "banana": "Banana is a tropical fruit."
  };
  return mockDatabase[productName] || "Product not found.";
};


// Define the custom tool for product lookup
export const PRODUCT_LOOKUP = new DynamicTool({
  name: "PRODUCT_LOOKUP",
  description: "Lookup products in the database by name.",
  func: async (input: string) => lookupProductByName(input),
});
