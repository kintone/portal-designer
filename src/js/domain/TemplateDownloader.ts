import axios from "axios";

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
];

const getModels = () => templateModels;

const download = (templateIndex: number): Promise<string> => {
  const url = templateModels[templateIndex].json;
  return axios
    .get(url)
    .then((response: any) => {
      // axiosは、responseTypeにtextを指定してもjsonファイルを返すので、テキストに変換する。
      return JSON.stringify(response.data);
    })
    .catch((error: Error) => {
      throw error;
    });
};

export default {
  download,
  getModels
};
