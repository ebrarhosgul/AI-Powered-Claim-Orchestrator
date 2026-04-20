"use client";

import { useState } from "react";
import { DeductionReasonNode } from "@/types/claim";
import { analyzeDocument } from "@/lib/aiSimulator";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

export interface DeductionReasonNodeProps {
  node: DeductionReasonNode;
}

export function DeductionReasonNodeComponent({ node }: DeductionReasonNodeProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const result = await analyzeDocument(file.name);
    setIsVerified(result);
    setIsUploading(false);
  };

  return (
    <div className="border border-border p-5 rounded-xl bg-card mb-0 shadow-sm relative ml-12">
      <div className="absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-destructive border-4 border-background ring-1 ring-border z-10" />
      
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-semibold text-lg">{node.title}</h3>
        {isVerified && <Badge className="bg-green-600 text-white hover:bg-green-700">Document Verified</Badge>}
      </div>
      
      <div className="mt-2 text-sm text-muted-foreground grid gap-1">
        <div className="flex items-start justify-between">
            <div>
              <p>Reason Code: {node.reasonCode}</p>
              <p className="text-destructive font-medium mt-1">Deduction Amount: ${node.deductionAmount.toLocaleString()}</p>
            </div>
            <div className="text-right">
                <Badge variant="outline" className="mb-2">{node.status}</Badge>
                <p className="text-xs opacity-70">{new Date(node.timestamp).toLocaleString()}</p>
            </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
         <p className="mb-3 text-sm font-medium">Upload required documentation to dispute or verify this deduction:</p>
         <div className="flex items-center gap-3">
            <Input 
              type="file" 
              onChange={handleFileUpload} 
              disabled={isUploading || isVerified}
              className="max-w-xs cursor-pointer"
            />
            {isUploading && <Loader2 className="animate-spin h-5 w-5 text-muted-foreground" />}
         </div>
      </div>
    </div>
  );
}
