/* eslint-env mocha */

import { expect } from 'chai';
import { TYPE_CUSTOMIZE, TYPE_DEFAULT } from './Storage';
import { convertStorageToType, convertStorageToState } from './StorageConverter';

describe('StorageConverter', () => {
  context('convertStorageToType', () => {
    it('TYPE_CUSTOMIZEには、TYPE_CUSTOMIZEを返す', () => {
      const actual = convertStorageToType({ type: TYPE_CUSTOMIZE });
      expect(actual).eql(TYPE_CUSTOMIZE);
    });

    it('TYPE_DEFAULTには、TYPE_DEFAULTを返す', () => {
      const actual = convertStorageToType({ type: TYPE_DEFAULT });
      expect(actual).eql(TYPE_DEFAULT);
    });

    it('typeが空文字なら、TYPE_DEFAULTを返す', () => {
      const actual = convertStorageToType({ type: '' });
      expect(actual).eql(TYPE_DEFAULT);
    });

    it('typeプロパティがないなら、TYPE_DEFAULTを返す', () => {
      const actual = convertStorageToType({});
      expect(actual).eql(TYPE_DEFAULT);
    });
  });

  context('convertStorageToState', () => {
    it('hiddenPortalHeaderプロパティがtrueならtrueを返す', () => {
      const state = convertStorageToState({ hiddenPortalHeader: true });
      expect(state.editor.hiddenPortalHeader).eql(true);
    });

    it('hiddenPortalHeaderプロパティがfalseならfalseを返す', () => {
      const state = convertStorageToState({ hiddenPortalHeader: false });
      expect(state.editor.hiddenPortalHeader).eql(false);
    });

    it('hiddenPortalHeaderプロパティがないならfalseを返す', () => {
      const state = convertStorageToState({});
      expect(state.editor.hiddenPortalHeader).eql(false);
    });
  });
});
