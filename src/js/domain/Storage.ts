import ChromeStorage from "../lib/ChromeStorage";

export const TYPE_CUSTOMIZE = "customize";
export const TYPE_DEFAULT = "default";

const ALL_KEYS = [
  "type",
  "name",
  "html",
  "css",
  "js",
  "headerColor",
  "toolbarColor",
  "hiddenPortalHeader",
  "portalHeaderColor"
];

const isCustomizeType = (type: string) => type && type === TYPE_CUSTOMIZE;

const Storage = {
  get: (keys: string[]) => ChromeStorage.get<EditorStorage>(keys),
  set: (storage: any) => ChromeStorage.set(storage),
  getAll: () => ChromeStorage.get<EditorStorage>(ALL_KEYS),
  clear: () => ChromeStorage.clear(),
  isCustomizeType
};

export default Storage;
