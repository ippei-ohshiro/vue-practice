import "@/plugins/composition-api";
import { reactive } from "@vue/composition-api";
import { Profile } from "@/store/profile.model";

export const profileMockData: Profile = {
  userId: "66006b29-727e-4ed8-a3c8-95d4438f66d4",
  userName: "ippei",
  nickname: "一平",
  themeColor: "#4caf50",
  hasAvatar: false,
  mailAddress: "ippei@example.com"
};

export const profileStore = reactive({ profile: null as Profile | null });
