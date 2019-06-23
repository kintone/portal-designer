import axios from "axios";
import { convertTextToStateFragment } from "./TextConverter";

const manifestUrl =
  "https://raw.githubusercontent.com/kintone/portal-designer/master/templates/manifest.json";

const getModels = async () => {
  const { baseUrl, models } = (await axios.get<Manifest>(manifestUrl)).data;
  return models.map(model => {
    return {
      ...model,
      thumbnail: baseUrl + model.thumbnail,
      json: baseUrl + model.json
    };
  });
};

const download = async (
  templateModel: TemplateModel
): Promise<EditorImportableState> => {
  const url = templateModel.json;
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

const preloadImages = async () => {
  const templateModels = await getModels();
  for (const templateModel of templateModels) {
    const img = document.createElement("img");
    img.src = templateModel.thumbnail;
  }
};

interface Manifest {
  baseUrl: string;
  models: TemplateModel[];
}

export default {
  download,
  getModels,
  preloadImages
};
