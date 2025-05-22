// Defines the valid names for agents, plus "system" for system messages.
export type AgentName = "assignment" | "career" | "counseling" | "exam" | "search" | "system";

// Defines the structure for a chat message.
export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  agent: AgentName | null; // Updated to use AgentName
  timestamp?: string; // ISO string format for timestamp
}

// Defines the expected structure for the file upload API response.
export interface FileUploadResponse {
  message: Message; // Assuming the server sends back a message object to be displayed
  // Add other fields if the actual API response for upload includes more, e.g., fileId, status.
  // For now, based on chat-interface.tsx, it expects at least a message.
}
