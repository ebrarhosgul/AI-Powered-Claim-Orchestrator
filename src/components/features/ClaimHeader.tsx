import { useClaimStore } from "@/store/useClaimStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Clock, FileText, CheckCircle2 } from "lucide-react";

export function ClaimHeader() {
  const { claimDetails, timelineNodes } = useClaimStore();

  if (!claimDetails) return null;

  const requiresAction = timelineNodes.some((node) => node.actionRequired === true && node.status !== "Completed");

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{claimDetails.currentStatus}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Remaining</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{claimDetails.estimatedRemainingTime}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">File Number</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{claimDetails.fileNo}</div>
          </CardContent>
        </Card>
      </div>

      {requiresAction && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Action Required</AlertTitle>
          <AlertDescription>
            There is a pending action required on your timeline. Please review the nodes below to upload necessary documents or provide information.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
