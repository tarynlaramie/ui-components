const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  compilerOptions: {
    customElement: true
  },

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
};
