import { ComponentStatus } from './component-status';


// NOTE: It's not necessary to put Alpha components in this list, but they will need to be added at some time so they can go to Beta and Prod
export const COMPONENTS = [
  {
    className: 'GoAPageBlock',
    path: './components/page-block/PageBlock.svelte',
    status: ComponentStatus.Alpha
  },
  {
    className: 'GoAAppHeader',
    path: './components/app-header/AppHeader.svelte',
    status: ComponentStatus.Beta
  },
  {
    className: 'GoABadge',
    path: './components/badge/Badge.svelte',
    status: ComponentStatus.Prod
  }
];