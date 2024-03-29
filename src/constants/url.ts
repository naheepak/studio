const BASE_URL = "/";
export const PAGE_URL = {
  MAIN: "/",
  FIRST: {
    LIST: `/00`,
    DETAIL: (id: string) => `/00/${id}`,
  },
  SECOND: {
    LIST: `/01`,
    DETAIL: (id: string) => `/01/${id}`,
  },
  THIRD: {
    LIST: `/02`,
    DETAIL: (id: string) => `/02/${id}`,
  },
};
