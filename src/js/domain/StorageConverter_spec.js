/* eslint-env mocha */

import { TYPE_CUSTOMIZE, TYPE_DEFAULT } from './Storage';
import { convertStorageToType } from './StorageConverter';

describe('StorageConverter', () => {
  context('convertStorageToType', () => {
    it('TYPE_CUSTOMIZEには、TYPE_CUSTOMIZEを返す', () => {
      convertStorageToType(TYPE_CUSTOMIZE);
    });
  });
});
