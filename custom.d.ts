declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'

declare module '*.module.css' {
  const classess: { readonly [key: string]: string }
  export default classess
}

declare module '*.module.sass' {
  const classess: { readonly [key: string]: string }
  export default classess
}

declare module '*.module.scss' {
  const classess: { readonly [key: string]: string }
  export default classess
}
