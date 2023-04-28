/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SECRET: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }