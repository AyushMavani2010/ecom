// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.png" {
  const value: StaticImageData;
  export default value;
}
