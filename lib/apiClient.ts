// Base URL for the API, can be configured as needed
const BASE_URL = ""; // Using relative paths for now

// Import types
import type { Message, AgentName, FileUploadResponse } from "./types";

interface ApiErrorResponse {
  error: string;
  status: number;
  statusText: string;
}

/**
 * A generic function to handle POST requests with JSON payloads.
 * @param endpoint The API endpoint path (e.g., "/api/chat").
 * @param payload The data to send in the request body.
 * @returns A promise that resolves with the parsed JSON response.
 * @throws An error if the network request fails or the server returns a non-ok status.
 */
async function postJSON<T, R>(endpoint: string, payload: T): Promise<R> {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API request failed: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json() as Promise<R>;
  } catch (error) {
    console.error(`Error in postJSON to ${endpoint}:`, error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

/**
 * Sends a chat message to the specified agent.
 * @param message The message content.
 * @param agent The agent identifier.
 * @returns A promise that resolves with the chat API's response (a Message object).
 */
export async function sendChatMessage(
  message: string,
  agent: AgentName // Updated to use AgentName
): Promise<Message> { // Updated return type
  return postJSON("/api/chat", { message, agent });
}

/**
 * Uploads a file to the specified agent.
 * @param file The file to upload.
 * @param agent The agent identifier.
 * @returns A promise that resolves with the upload API's response.
 * @throws An error if the network request fails or the server returns a non-ok status.
 */
export async function uploadFile(
  file: File,
  agent: AgentName // Updated to use AgentName
): Promise<FileUploadResponse> { // Updated return type
  const url = `${BASE_URL}/api/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("agent", agent);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      // Note: 'Content-Type' header is not set manually for FormData.
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `API request failed: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json() as Promise<FileUploadResponse>; // Updated type assertion
  } catch (error) {
    console.error(`Error in uploadFile to ${url}:`, error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Example of how one might define a more specific error response structure
// interface MyCustomError extends ApiErrorResponse {
//   // additional custom fields
// }
