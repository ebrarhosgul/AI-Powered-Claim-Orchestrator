import { SubstituteRentalVehicleNode } from "@/types/claim";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface SubstituteRentalVehicleNodeProps {
  node: SubstituteRentalVehicleNode;
}

export function SubstituteRentalVehicleNodeComponent({ node }: SubstituteRentalVehicleNodeProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">{node.title}</CardTitle>
        <Badge variant={node.status === "Completed" ? "default" : "secondary"}>{node.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-sm space-y-2">
          <div>
            <span className="font-medium text-muted-foreground">Rental Company: </span>
            <span>{node.rentalCompany}</span>
          </div>
          <div className="flex gap-4">
            <div>
              <span className="font-medium text-muted-foreground">Days Requested: </span>
              <span>{node.daysRequested}</span>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Vehicle Class: </span>
              <span>{node.vehicleClass}</span>
            </div>
          </div>
          <div className="pt-2 text-xs text-muted-foreground">
            {new Date(node.timestamp).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
