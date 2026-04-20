import { ProcessDetailNode } from "@/types/claim";
import { TowingNode } from "../features/nodes/TowingNode";
import { ClaimNotificationNodeComponent } from "../features/nodes/ClaimNotificationNode";
import { AppraisalNodeComponent } from "../features/nodes/AppraisalNode";
import { SubstituteRentalVehicleNodeComponent } from "../features/nodes/SubstituteRentalVehicleNode";
import { FileReviewNodeComponent } from "../features/nodes/FileReviewNode";
import { DeductionReasonNodeComponent } from "../features/nodes/DeductionReasonNode";
import { PaymentInformationNodeComponent } from "../features/nodes/PaymentInformationNode";
import { ClosedNodeComponent } from "../features/nodes/ClosedNode";
import { InformationNode } from "../features/nodes/InformationNode";

type RegistryMap = {
  [K in ProcessDetailNode["title"]]: React.ComponentType<{ node: Extract<ProcessDetailNode, { title: K }> }>;
};

export const NodeRegistry: RegistryMap = {
  "Towing Service": TowingNode,
  "Claim Notification": ClaimNotificationNodeComponent,
  "Appraisal": AppraisalNodeComponent,
  "Substitute Rental Vehicle": SubstituteRentalVehicleNodeComponent,
  "File Review": FileReviewNodeComponent,
  "Deduction Reason": DeductionReasonNodeComponent,
  "Payment Information": PaymentInformationNodeComponent,
  "Closed": ClosedNodeComponent,
  "Information Note": InformationNode,
};
