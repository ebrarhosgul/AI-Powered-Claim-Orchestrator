import { ClaimNotificationNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ClaimNotificationNodeProps {
  node: ClaimNotificationNode;
}

export function ClaimNotificationNodeComponent({ node }: ClaimNotificationNodeProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">{node.title}</CardTitle>
        <Badge variant={node.status === "Completed" ? "default" : "secondary"}>{node.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          <div>
            <span className="font-medium text-muted-foreground">Incident Date: </span>
            <span>{new Date(node.incidentDate).toLocaleString()}</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Description: </span>
            <p className="mt-1">{node.description}</p>
          </div>
          <div className="pt-2 text-xs text-muted-foreground">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
