"use client";

import { useState } from "react";
import { InformationNoteNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface InformationNodeProps {
  node: InformationNoteNode;
}

export function InformationNode({ node }: InformationNodeProps) {
  const [isEditing, setIsEditing] = useState(!node.message);
  const [message, setMessage] = useState(node.message || "");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Card className="mb-4 border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/20">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold text-amber-800 dark:text-amber-300">
          {node.title}
        </CardTitle>
        <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300">
          {node.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-4">
          {isEditing ? (
            <div className="space-y-3">
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your information note..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-end">
                <Button onClick={handleSave} size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Save Note
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="whitespace-pre-wrap">{message}</p>
              <div className="flex justify-end">
                <Button onClick={() => setIsEditing(true)} size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-800/50 cursor-pointer">
                  Edit
                </Button>
              </div>
            </div>
          )}
          <div className="pt-2 text-xs text-muted-foreground opacity-70">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
