"use client";

import { useState } from "react";
import { AppraisalNode } from "@/types/claim";
import { explainWithAI } from "@/lib/aiSimulator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2 } from "lucide-react";

export interface AppraisalNodeProps {
  node: AppraisalNode;
}

export function AppraisalNodeComponent({ node }: AppraisalNodeProps) {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async () => {
    if (explanation) {
       setExplanation(null);
       return;
    }
    setIsLoading(true);
    const result = await explainWithAI("Appraisal");
    setExplanation(result);
    setIsLoading(false);
  };

  return (
    <div className="border border-border p-5 rounded-xl bg-card mb-0 shadow-sm relative ml-12">
      <div className="absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background ring-1 ring-border z-10" />

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{node.title}</h3>
        <Button size="sm" variant="secondary" onClick={handleExplain} disabled={isLoading} className="gap-2 shrink-0 cursor-pointer">
           {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <Sparkles className="h-4 w-4 text-purple-500" />}
           Explain with AI
        </Button>
      </div>
      
      {explanation && (
        <div className="mb-5 bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 p-4 rounded-lg text-sm border border-purple-100 dark:border-purple-800 leading-relaxed whitespace-pre-wrap">
          {explanation}
        </div>
      )}

      <div className="text-sm text-foreground grid gap-1 mt-2">
        <p className="font-medium">Appraiser Name: <span className="text-muted-foreground font-normal">{node.appraiserName}</span></p>
        {node.estimatedDamage && (
          <p className="font-medium mt-1">Estimated Damage: <span className="text-muted-foreground font-normal">${node.estimatedDamage.toLocaleString()}</span></p>
        )}
        <div className="mt-4 pt-4 border-t border-border flex justify-between items-center text-muted-foreground">
          <Badge variant="outline">{node.status}</Badge>
          <span className="text-xs opacity-70">{new Date(node.timestamp).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
