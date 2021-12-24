import { RouterLink, RouterView } from "vue-router";


declare global {
   interface _VLS_GlobalComponents{
      RouterLink: typeof RouterLink;
      RouterView: typeof RouterView;
   }
}

// declare module '@vue/runtime-core' {
//    export interface GlobalComponents {
//       RouterLink: typeof import('vue-router')['RouterLink']
//       RouterView: typeof import('vue-router')['RouterView']
//    }
// }

// export { }