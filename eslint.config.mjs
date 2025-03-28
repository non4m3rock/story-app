import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: { ...globals.node } } },
  pluginJs.configs.recommended,
  daStyle,
  {
    rules: { 'linebreak-style': 'off' },
  },
];
