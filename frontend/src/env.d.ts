interface ImportMetaEnv {
  readonly VITE_BACKEND_SIGNUP: string
  readonly VITE_BACKEND_SIGNIN: string
  readonly VITE_FORM: string
  readonly VITE_USER_ME: string
  readonly VITE_PROFILE_STANDART_USER_PHOTO: string
  readonly VITE_CLOUDINARY: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}