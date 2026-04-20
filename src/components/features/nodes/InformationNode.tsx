"use client";

import { useState } from "react";
import { InformationNoteNode } from "@/types/claim";
import { useClaimStore } from "@/store/useClaimStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export interface InformationNodeProps {
  node: InformationNoteNode;
}

export function InformationNode({ node }: InformationNodeProps) {
  const { removeNode, updateNode } = useClaimStore();
  const [isEditing, setIsEditing] = useState(!node.message);
  const [message, setMessage] = useState(node.message || "");
  const [originalMessage, setOriginalMessage] = useState(node.message || "");

  const handleSave = () => {
    if (updateNode) {
      updateNode(node.id, { message });
    }
    setOriginalMessage(message);
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (!originalMessage) {
      removeNode(node.id);
    } else {
      setMessage(originalMessage);
      setIsEditing(false);
    }
  };

  return (
    <Card className="mb-4 border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/20 shadow-sm relative ml-12">
      <div className="absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-amber-400 border-4 border-background ring-1 ring-border z-10" />

      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold text-amber-800 dark:text-amber-300">
          {node.title}
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300">
            {node.status}
          </Badge>
          <Button 
            onClick={() => removeNode(node.id)} 
            size="icon" 
            variant="ghost" 
            className="h-6 w-6 text-amber-600 hover:text-amber-800 hover:bg-amber-200/50 dark:text-amber-400 dark:hover:bg-amber-800/50 cursor-pointer"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-4">
          {isEditing ? (
            <div className="space-y-3">
              <textarea
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your note here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <Button onClick={handleCancel} size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:text-amber-300 cursor-pointer">
                  Cancel
                </Button>
                <Button onClick={handleSave} size="sm" className="bg-amber-600 hover:bg-amber-700 text-white cursor-pointer">
                  Save Note
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="whitespace-pre-wrap text-amber-900 dark:text-amber-100 leading-relaxed">{message}</p>
              <div className="flex justify-end">
                <Button onClick={() => setIsEditing(true)} size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-800/50 cursor-pointer">
                  Edit Note
                </Button>
              </div>
            </div>
          )}
          <div className="pt-2 text-xs text-amber-600/70 dark:text-amber-400/70 font-medium">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
