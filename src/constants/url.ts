const BASE_URL = "/";
export const PAGE_URL = {
  MAIN: "/",
  FIRST: {
    LIST: `${BASE_URL}00`,
    DETAIL: (id: string) => `${BASE_URL}00/${id}`,
  },
  SECOND: {
    LIST: `${BASE_URL}01`,
    DETAIL: (id: string) => `${BASE_URL}01/${id}`,
  },
  THIRD: {
    LIST: `${BASE_URL}02`,
    DETAIL: (id: string) => `${BASE_URL}02/${id}`,
  },
};
