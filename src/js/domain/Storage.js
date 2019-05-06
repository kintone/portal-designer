import ChromeStorage from '../lib/ChromeStorage';

const ALL_KEYS = [
  'type',
  'name',
  'html',
  'css',
  'js',
  'headerColor',
  'toolbarColor',
];

const Storage = {
  get: ChromeStorage.get,
  set: ChromeStorage.set,
  getAll: () => ChromeStorage.get(ALL_KEYS),
};

export default Storage;
