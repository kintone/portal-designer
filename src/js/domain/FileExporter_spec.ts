/* eslint-env mocha */

import * as chai from "chai";
import { generateFileName } from "./FileExporter";

describe("FileExporter", () => {
  context("generateFileName", () => {
    it("通常のファイル名は、そのまま返る", () => {
      chai
        .expect(generateFileName("original.json", "json"))
        .eql("original.json");
    });

    it(".jsonの拡張子がない場合、.jsonが末尾につく", () => {
      chai.expect(generateFileName("original", "json")).eql("original.json");
    });

    it("空文字の場合、デフォルトのファイル名になる", () => {
      chai.expect(generateFileName("", "json")).eql(".json");
    });

    it("特殊文字はエスケープされる", () => {
      chai
        .expect(generateFileName('/?<>\\:*|".json', "json"))
        .eql("_________.json");
    });

    it("空白文字はそのまま", () => {
      chai.expect(generateFileName(" .json", "json")).eql(" .json");
    });
  });
});
