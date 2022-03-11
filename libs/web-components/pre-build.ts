// console.log('pre-build.ts args', process.argv);

import { COMPONENTS } from './src/component-list';
import { ComponentStatus, componentHasStatus } from './src/component-status';
import { writeFileSync } from 'fs';

let componentStatus = ComponentStatus.Prod;

const statusArg = process.argv[2];
if (statusArg) {
  const status = statusArg.charAt(0).toUpperCase() + statusArg.slice(1);
  componentStatus = ComponentStatus[status];
}

console.log(`Pre-Build: ComponentStatus: ${ComponentStatus[componentStatus]}`);

// don't have to generate index for alpha
if (componentStatus !== ComponentStatus.Alpha) {
  generateIndexFile(componentStatus);
}

function generateIndexFile(componentStatus: ComponentStatus) {
  const path = `src/index.${ComponentStatus[componentStatus].toString().toLowerCase()}.ts`;
  console.log(`Pre-Build: indexFile: ${path}`);

  let exportBuffer = [];

  COMPONENTS.forEach(c => {
    // console.log(`Pre-Build: component: ${c.className} status: ${c.status} hasStatus: ${componentHasStatus(c, componentStatus)}`);

    if (componentHasStatus(c, componentStatus)) {
      const componentExport = `export { default as ${c.className} } from "${c.path}";`;
      exportBuffer.push(componentExport);
    }
  });

  writeFileSync(path, exportBuffer.join('\n'));
}

// needed so compilation doesn't fail
export { };