"use client";
// export const customLoader = ({ src }) => {
//   return src;
// };

export const customLoader = ({ src, width, quality }) => {
  return `${src}?w=${width || 400}&q=${quality || 75}`;
};
