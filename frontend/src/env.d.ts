interface ImportMetaEnv {
  readonly VITE_BACKEND_SIGNUP: string
  readonly VITE_BACKEND_SIGNIN: string
  readonly VITE_FORM: string
  readonly VITE_USER_ME: string
  readonly VITE_PROFILE_STANDART_USER_PHOTO: string
  readonly VITE_CLOUDINARY: string
  readonly VITE_COMPLETED_SET: string
  readonly VITE_COUNT_STARS: string

}


interface ImportMeta {
  readonly env: ImportMetaEnv
}