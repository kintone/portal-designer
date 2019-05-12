/* eslint-env mocha */

import { expect } from "chai";
import { TYPE_CUSTOMIZE, TYPE_DEFAULT } from "./Storage";
import {
  convertStorageToType,
  convertStorageToState
} from "./StorageConverter";

describe("StorageConverter", () => {
  context("convertStorageToType", () => {
    it("TYPE_CUSTOMIZEには、TYPE_CUSTOMIZEを返す", () => {
      const actual = convertStorageToType(TYPE_CUSTOMIZE);
      expect(actual).eql(TYPE_CUSTOMIZE);
    });

    it("TYPE_DEFAULTには、TYPE_DEFAULTを返す", () => {
      const actual = convertStorageToType(TYPE_DEFAULT);
      expect(actual).eql(TYPE_DEFAULT);
    });

    it("typeが空文字なら、TYPE_DEFAULTを返す", () => {
      const actual = convertStorageToType("");
      expect(actual).eql(TYPE_DEFAULT);
    });

    it("typeプロパティがないなら、TYPE_DEFAULTを返す", () => {
      const actual = convertStorageToType();
      expect(actual).eql(TYPE_DEFAULT);
    });
  });

  context("convertStorageToState", () => {
    const generateStorage = (props: { hiddenPortalHeader?: boolean }) => {
      return {
        type: TYPE_DEFAULT,
        name: "",
        html: "",
        css: "",
        js: "",
        headerColor: "",
        toolbarColor: "",
        portalHeaderColor: "",
        ...props
      } as EditorStorage;
    };

    it("hiddenPortalHeaderプロパティがtrueならtrueを返す", () => {
      const storage = generateStorage({ hiddenPortalHeader: true });
      const state = convertStorageToState(storage);
      expect(state.editor.hiddenPortalHeader).eql(true);
    });

    it("hiddenPortalHeaderプロパティがfalseならfalseを返す", () => {
      const storage = generateStorage({ hiddenPortalHeader: false });
      const state = convertStorageToState(storage);
      expect(state.editor.hiddenPortalHeader).eql(false);
    });

    it("hiddenPortalHeaderプロパティがないならfalseを返す", () => {
      const storage = generateStorage({});
      const state = convertStorageToState(storage);
      expect(state.editor.hiddenPortalHeader).eql(false);
    });
  });
});
