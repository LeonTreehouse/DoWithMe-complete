import { create } from "zustand";

interface MeetingQuery {
  name?: string;
  description?: string;
  picture?: number;
  location?: string;
  date?: string;
  day?: string
  searchText?: string;
}

interface MeetingQueryStore {
  meetingQuery: MeetingQuery;
  setSearchText: (searchText: string) => void;
}

const useMeetingQueryStore = create<MeetingQueryStore>((set) => ({
  meetingQuery: {},
  setSearchText: (searchText) => set(() => ({ meetingQuery: { searchText } })),
}));

export default useMeetingQueryStore;