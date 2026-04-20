declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export = classes;
}

declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export = classes;
}
