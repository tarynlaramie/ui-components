import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // adapter: adapter(),

    files: {
      lib: 'src/components',
      routes: '',
    },

    package: {
      dir: '../../dist/packages/web-components',
      emitTypes: true
    },

    // hydrate the <div id="svelte"> element in src/app.html
    // target: '#svelte'
  }
};

export default config;
