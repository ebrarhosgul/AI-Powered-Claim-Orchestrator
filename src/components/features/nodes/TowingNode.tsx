import { TowingServiceNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface TowingNodeProps {
  node: TowingServiceNode;
}

export function TowingNode({ node }: TowingNodeProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">{node.title}</CardTitle>
        <Badge variant={node.status === "Completed" ? "default" : "secondary"}>{node.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          {node.providerUrl && (
            <div>
              <span className="font-medium text-muted-foreground">Provider: </span>
              <a href={node.providerUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {node.providerUrl}
              </a>
            </div>
          )}
          {node.plateNumber && (
            <div>
              <span className="font-medium text-muted-foreground">Plate Number: </span>
              <span>{node.plateNumber}</span>
            </div>
          )}
          {node.pickupLocation && (
            <div>
              <span className="font-medium text-muted-foreground">Pickup Location: </span>
              <span>{node.pickupLocation}</span>
            </div>
          )}
          {node.dropoffLocation && (
            <div>
              <span className="font-medium text-muted-foreground">Dropoff Location: </span>
              <span>{node.dropoffLocation}</span>
            </div>
          )}
          <div className="pt-2 text-xs text-muted-foreground">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
