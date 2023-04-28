/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SECRET: string
    readonly API_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }