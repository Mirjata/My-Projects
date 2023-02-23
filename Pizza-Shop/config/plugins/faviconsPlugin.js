import favicons from 'favicons';
import fs from 'fs';
import { join } from 'path';

const vitePluginFaviconsInject = (inputSource, inputConfig = {}) => {
  let source = inputSource;
  let config = inputConfig;
  let favIconsDir = null;
  let output = null;

  return {
    name: 'vite-plugin-favicon',
    configResolved(resolvedConfig) {
      // override default source if none set
      if (!source || source === '') source = join(resolvedConfig.root, 'src', 'logo.png');

      // making sure that config is a object
      if (!config || (config && config.constructor.name !== 'Object')) config = {};

      // override default path is none set
      const opPath = join(resolvedConfig.base, 'favicons');
      config.path = opPath;
      favIconsDir = join(resolvedConfig.build.outDir, 'favicons');
    },
    async buildStart() {
      output = await favicons(source, config);
    },
    closeBundle() {
      if (!favIconsDir || !output) return;

      !fs.existsSync(favIconsDir) && fs.mkdirSync(favIconsDir, { recursive: true });

      output.files.forEach(eachFile => fs.writeFileSync(`${favIconsDir}/${eachFile.name}`, eachFile.contents));
      output.images.forEach(eachImage => fs.writeFileSync(`${favIconsDir}/${eachImage.name}`, eachImage.contents));
    },
    transformIndexHtml(htmlText) {
      if (!output.html) return htmlText;
      return htmlText.replace('</head>', `${output.html.join('')}</head>`);
    },
  };
};

export default vitePluginFaviconsInject;
