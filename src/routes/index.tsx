import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <Badge variant="secondary" className="mx-auto">Test Page</Badge>
          <CardTitle className="text-3xl">Hello, World!</CardTitle>
          <CardDescription>
            This is a simple test webpage to verify the app is working.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-5xl font-bold tabular-nums">{count}</p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setCount((c) => c - 1)}>
              Decrement
            </Button>
            <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
            <Button variant="ghost" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
