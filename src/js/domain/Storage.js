import ChromeStorage from '../lib/ChromeStorage';

export const TYPE_CUSTOMIZE = 'customize';
export const TYPE_DEFAULT = 'default';

const ALL_KEYS = [
  'type',
  'name',
  'html',
  'css',
  'js',
  'headerColor',
  'toolbarColor',
  'portalHeaderColor',
];

const isCustomizeType = type => (
  type && type === TYPE_CUSTOMIZE
);

const Storage = {
  get: ChromeStorage.get,
  set: ChromeStorage.set,
  getAll: () => ChromeStorage.get(ALL_KEYS),
  isCustomizeType,
};

export default Storage;
