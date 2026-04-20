import { create } from "zustand";
import { ClaimSchema, ProcessDetailNode, ClaimDetailsNode } from "@/types/claim";

export interface ClaimState {
  claimDetails: ClaimDetailsNode | null;
  timelineNodes: ProcessDetailNode[];
  isInitialized: boolean;

  initializeClaim: (payload: unknown) => void;
  insertNode: (node: ProcessDetailNode, index: number) => void;
  removeNode: (id: string) => void;
}

export const useClaimStore = create<ClaimState>((set) => ({
  claimDetails: null,
  timelineNodes: [],
  isInitialized: false,

  initializeClaim: (payload) => {
    const validatedData = ClaimSchema.parse(payload);
    set({
      claimDetails: validatedData.claimDetails,
      timelineNodes: validatedData.processDetails,
      isInitialized: true,
    });
  },

  insertNode: (node, index) => {
    set((state) => {
      const newNodes = [...state.timelineNodes];
      newNodes.splice(index, 0, node);
      return { timelineNodes: newNodes };
    });
  },

  removeNode: (id) => {
    set((state) => ({
      timelineNodes: state.timelineNodes.filter((node) => node.id !== id),
    }));
  },
}));
