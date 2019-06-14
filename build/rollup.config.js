import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'InputCurrency',
    exports: 'named',
  },
  plugins: [
    vue({
      compileTemplate: true
    }),
    buble(),
  ],
};
