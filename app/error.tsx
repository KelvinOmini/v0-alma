"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming button component is available

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service or console
    console.error("GlobalError caught an error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-5 font-sans text-foreground">
          <div className="mx-auto max-w-md rounded-lg border border-border bg-card p-8 text-center shadow-lg">
            <h1 className="mb-4 text-3xl font-bold text-destructive">
              Oops! Something went wrong.
            </h1>
            <p className="mb-6 text-muted-foreground">
              We encountered an unexpected error. Please try again.
            </p>
            <p className="mb-6 text-xs text-muted-foreground">
              {error.message || "No specific error message available."}
              {error.digest && (
                <span className="mt-2 block text-xs">Digest: {error.digest}</span>
              )}
            </p>
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
