export interface Space {
  id: string;
  name: string;
  type: "platform" | "tenant";
  description: string;
  initials: string;
  color: string;
}

export const MOCK_SPACES: Space[] = [
  {
    id: "platform",
    name: "PropNexus Platform",
    type: "platform",
    description: "Platform administration console",
    initials: "PN",
    color: "#D4962B",
  },
  {
    id: "sunrise",
    name: "Sunrise Realty Group",
    type: "tenant",
    description: "Tenant workspace",
    initials: "SR",
    color: "#4F85FF",
  },
  {
    id: "metro",
    name: "Metro Properties",
    type: "tenant",
    description: "Tenant workspace",
    initials: "MP",
    color: "#2FBA6E",
  },
];
