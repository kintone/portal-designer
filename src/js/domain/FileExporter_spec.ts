/* eslint-env mocha */

import * as chai from "chai";
import FileExporter from "./FileExporter";

describe("FileExporter", () => {
  context("generateFileName", () => {
    it("通常のファイル名は、そのまま返る", () => {
      chai
        .expect(FileExporter.generateFileName("original", "", "json"))
        .eql("original.json");
    });

    it("特殊文字はエスケープされる", () => {
      chai
        .expect(FileExporter.generateFileName("/?<>\\:*|", "", "json"))
        .eql("________.json");
    });

    it("空白文字はそのまま", () => {
      chai.expect(FileExporter.generateFileName(" ", "", "json")).eql(" .json");
    });

    it("接尾辞を指定できる", () => {
      chai
        .expect(FileExporter.generateFileName("original", "_desktop", "js"))
        .eql("original_desktop.js");
    });
  });
});
