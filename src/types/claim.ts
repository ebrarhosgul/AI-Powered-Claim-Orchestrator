import { z } from "zod";

export const BaseNodeSchema = z.object({
  id: z.string(),
  status: z.enum(["Pending", "In Progress", "Completed", "Failed", "Cancelled"]),
  timestamp: z.iso.datetime(),
  explanation: z.string().optional(),
});

export const TowingServiceSchema = BaseNodeSchema.extend({
  title: z.literal("Towing Service"),
  providerUrl: z.url().optional(),
  plateNumber: z.string().optional(),
  pickupLocation: z.string().optional(),
  dropoffLocation: z.string().optional(),
});

export const ClaimNotificationSchema = BaseNodeSchema.extend({
  title: z.literal("Claim Notification"),
  description: z.string(),
  incidentDate: z.iso.datetime(),
});

export const AppraisalSchema = BaseNodeSchema.extend({
  title: z.literal("Appraisal"),
  appraiserName: z.string(),
  estimatedDamage: z.number().optional(),
});

export const SubstituteRentalVehicleSchema = BaseNodeSchema.extend({
  title: z.literal("Substitute Rental Vehicle"),
  rentalCompany: z.string(),
  daysRequested: z.number(),
  vehicleClass: z.string(),
});

export const FileReviewSchema = BaseNodeSchema.extend({
  title: z.literal("File Review"),
  reviewerId: z.string(),
  notes: z.string().optional(),
});

export const DeductionReasonSchema = BaseNodeSchema.extend({
  title: z.literal("Deduction Reason"),
  reasonCode: z.string(),
  deductionAmount: z.number(),
});

export const PaymentInformationSchema = BaseNodeSchema.extend({
  title: z.literal("Payment Information"),
  bankName: z.string(),
  ibans: z.string(),
  amount: z.number(),
});

export const ClosedSchema = BaseNodeSchema.extend({
  title: z.literal("Closed"),
  closureReason: z.string(),
});

export const InformationNoteSchema = BaseNodeSchema.extend({
  title: z.literal("Information Note"),
  message: z.string(),
});

export const ProcessDetailSchema = z.discriminatedUnion("title", [
  TowingServiceSchema,
  ClaimNotificationSchema,
  AppraisalSchema,
  SubstituteRentalVehicleSchema,
  FileReviewSchema,
  DeductionReasonSchema,
  PaymentInformationSchema,
  ClosedSchema,
  InformationNoteSchema,
]);

export const ClaimDetailsSchema = z.object({
  fileNo: z.string(),
  estimatedRemainingTime: z.string(),
  currentStatus: z.string(),
  actionability: z.string(),
});

export const ClaimSchema = z.object({
  claimDetails: ClaimDetailsSchema,
  processDetails: z.array(ProcessDetailSchema),
});

export type BaseNode = z.infer<typeof BaseNodeSchema>;
export type TowingServiceNode = z.infer<typeof TowingServiceSchema>;
export type ClaimNotificationNode = z.infer<typeof ClaimNotificationSchema>;
export type AppraisalNode = z.infer<typeof AppraisalSchema>;
export type SubstituteRentalVehicleNode = z.infer<typeof SubstituteRentalVehicleSchema>;
export type FileReviewNode = z.infer<typeof FileReviewSchema>;
export type DeductionReasonNode = z.infer<typeof DeductionReasonSchema>;
export type PaymentInformationNode = z.infer<typeof PaymentInformationSchema>;
export type ClosedNode = z.infer<typeof ClosedSchema>;
export type InformationNoteNode = z.infer<typeof InformationNoteSchema>;
export type ProcessDetailNode = z.infer<typeof ProcessDetailSchema>;
export type ClaimDetailsNode = z.infer<typeof ClaimDetailsSchema>;
export type ClaimData = z.infer<typeof ClaimSchema>;
