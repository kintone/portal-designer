/* eslint-env mocha */

import * as chai from "chai";
import FileExporter from "./FileExporter";
import { generateEditorState } from "../test/TestHelper";

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

  context("getPathOfDesktop", () => {
    it("公式のBoilderplateが返る", () => {
      // Setup
      const editorState = generateEditorState();
      // Exercise
      const path = FileExporter.getPathOfDesktop(editorState);
      // Verify
      chai.expect(path).eql("js/boilerplates/desktop.boilerplate");
    });

    it("非公式のBoilderplateが返る", () => {
      // Setup
      const editorState = generateEditorState();
      editorState.editor.hiddenPortalHeader = true;
      // Exercise
      const path = FileExporter.getPathOfDesktop(editorState);
      // Verify
      chai.expect(path).eql("js/boilerplates/desktop-unofficial.boilerplate");
    });
  });

  context("getPathOfMobile", () => {
    it("公式のBoilderplateが返る", () => {
      // Setup
      const editorState = generateEditorState();
      // Exercise
      const path = FileExporter.getPathOfMobile(editorState);
      // Verify
      chai.expect(path).eql("js/boilerplates/mobile.boilerplate");
    });

    it("非公式のBoilderplateが返る", () => {
      // Setup
      const editorState = generateEditorState();
      editorState.editor.hiddenPortalHeader = true;
      // Exercise
      const path = FileExporter.getPathOfMobile(editorState);
      // Verify
      chai.expect(path).eql("js/boilerplates/mobile-unofficial.boilerplate");
    });
  });
});
