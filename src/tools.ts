import { tool } from "langchain";
import * as z from "zod";

export const orderStatusTool = tool(
  async ({ orderId }) => {
    const mockOrders: Record<string, string> = {
      "ORD123": "Your order ORD123 has been shipped and will arrive in 2 days.",
      "ORD456": "Your order ORD456 is being packed and will be shipped tomorrow.",
    };

    return mockOrders[orderId] ?? "Order not found. Please check the order ID.";
  },
  {
    name: "order_status_lookup",
    description: "Looks up the status of a customer order using an order ID.",
    schema: z.object({
      orderId: z.string().describe("The customer order ID, for example ORD123"),
    }),
  }
);

export const supportPolicyTool = tool(
  async ({ topic }) => {
    const policies: Record<string, string> = {
      refund: "Refunds are available within 7 days if the product is unused.",
      delivery: "Standard delivery usually takes 3 to 5 business days.",
      warranty: "Products include a 1-year limited warranty.",
    };

    return policies[topic.toLowerCase()] ?? "No policy found for this topic.";
  },
  {
    name: "support_policy_lookup",
    description: "Finds support policy details for refund, delivery, or warranty.",
    schema: z.object({
      topic: z.string().describe("Policy topic such as refund, delivery, or warranty"),
    }),
  }
);
