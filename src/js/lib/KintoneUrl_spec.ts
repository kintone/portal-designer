/* eslint-env mocha */

import { expect } from "chai";
import KintoneUrl from "./KintoneUrl";

describe("KintoneUrl", () => {
  context("isPortal", () => {
    it("ポータルのURLではtrueが返る", () => {
      const url = "https://sample.cybozu.com/k/#/portal";
      expect(KintoneUrl.isPortal(url)).eql(true);
    });

    it("ゲストポータルのURLではfalseが返る", () => {
      const url = "https://sample.cybozu.com/k/guest/#/portal";
      expect(KintoneUrl.isPortal(url)).eql(false);
    });
  });

  context("isMobilePortal", () => {
    it("モバイルポータルのURLではtrueが返る", () => {
      const url = "https://sample.cybozu.com/k/m/";
      expect(KintoneUrl.isMobilePortal(url)).eql(true);
    });

    it("デスクトップのポータルのURLではfalseが返る", () => {
      const url = "https://sample.cybozu.com/k/#/portal";
      expect(KintoneUrl.isMobilePortal(url)).eql(false);
    });
  });
});
