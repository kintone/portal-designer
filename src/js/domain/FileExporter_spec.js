/* eslint-env mocha */

import { expect } from "chai";
import { generateFileName, DEFAULT_FILE_NAME } from "./FileExporter";

describe("FileExporter", () => {
  context("generateFileName", () => {
    it("通常のファイル名は、そのまま返る", () => {
      expect(generateFileName("original.json")).eql("original.json");
    });

    it(".jsonの拡張子がない場合、.jsonが末尾につく", () => {
      expect(generateFileName("original")).eql("original.json");
    });

    it("引数未指定の場合、デフォルトのファイル名になる", () => {
      expect(generateFileName()).eql(DEFAULT_FILE_NAME);
    });

    it("空文字の場合、デフォルトのファイル名になる", () => {
      expect(generateFileName("")).eql(DEFAULT_FILE_NAME);
    });

    it("特殊文字はエスケープされる", () => {
      expect(generateFileName('/?<>\\:*|".json')).eql("_________.json");
    });

    it("空白文字はそのまま", () => {
      expect(generateFileName(" .json")).eql(" .json");
    });
  });
});
