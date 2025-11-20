interface ImportMetaEnv {
  readonly VITE_BACKEND_SIGNUP: string
  readonly VITE_BACKEND_SIGNIN: string
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}