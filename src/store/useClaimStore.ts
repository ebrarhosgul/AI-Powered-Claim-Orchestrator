import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ClaimSchema, ProcessDetailNode, ClaimDetailsNode } from "@/types/claim";

export interface ClaimState {
  claimDetails: ClaimDetailsNode | null;
  timelineNodes: ProcessDetailNode[];
  isInitialized: boolean;

  initializeClaim: (payload: unknown) => void;
  insertNode: (node: ProcessDetailNode, index: number) => void;
  removeNode: (id: string) => void;
  updateNode: (id: string, partialData: Partial<ProcessDetailNode>) => void;
}

export const useClaimStore = create<ClaimState>()(
  persist(
    (set) => ({
      claimDetails: null,
      timelineNodes: [],
      isInitialized: false,

      initializeClaim: (payload) => {
        set((state) => {
          if (state.timelineNodes.length > 0) {
            return { isInitialized: true };
          }
          const validatedData = ClaimSchema.parse(payload);
          return {
            claimDetails: validatedData.claimDetails,
            timelineNodes: validatedData.processDetails,
            isInitialized: true,
          };
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
          timelineNodes: state.timelineNodes.filter((n) => n.id !== id),
        }));
      },

      updateNode: (id, partialData) => {
        set((state) => ({
          timelineNodes: state.timelineNodes.map((n) =>
            n.id === id ? ({ ...n, ...partialData } as ProcessDetailNode) : n
          ),
        }));
      },
    }),
    {
      name: "claim-orchestrator-storage",
      partialize: (state) => ({ ...state, isInitialized: false }),
    }
  )
);
