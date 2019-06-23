import axios from "axios";
import { convertTextToStateFragment } from "./TextConverter";

const baseURL =
  "https://raw.githubusercontent.com/kintone/portal-design-templates/master";

const templateModels = [
  {
    name: "basic-1column",
    thumbnail: baseURL + "/basic/1column/basic-1column.png",
    json: baseURL + "/basic/1column/basic-1column.json"
  },
  {
    name: "basic-1column-photo",
    thumbnail: baseURL + "/basic/1column/basic-1column-photo.png",
    json: baseURL + "/basic/1column/basic-1column-photo.json"
  },
  {
    name: "classic",
    thumbnail: baseURL + "/classic/classic.png",
    json: baseURL + "/classic/classic.json"
  },
  {
    name: "classic-all",
    thumbnail: baseURL + "/classic/classic-all.png",
    json: baseURL + "/classic/classic-all.json"
  },
  {
    name: "advanced-3tabs",
    thumbnail: baseURL + "/advanced/3tabs/advanced-3tabs.png",
    json: baseURL + "/advanced/3tabs/advanced-3tabs.json"
  }
] as TemplateModel[];

const getModels = async () => templateModels;

const download = async (
  templateIndex: number
): Promise<EditorImportableState> => {
  const url = templateModels[templateIndex].json;
  try {
    const response = await axios.get(url);
    // axiosは、responseTypeにtextを指定してもjsonファイルを返す。
    // 一旦テキストに変換してからStateに変換する。
    const rawText = JSON.stringify(response.data);
    return convertTextToStateFragment(rawText);
  } catch (error) {
    throw error;
  }
};

const preloadImages = () => {
  for (const templateModel of templateModels) {
    const img = document.createElement("img");
    img.src = templateModel.thumbnail;
  }
};

export default {
  download,
  getModels,
  preloadImages
};
