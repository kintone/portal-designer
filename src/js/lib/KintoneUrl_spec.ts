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
});
