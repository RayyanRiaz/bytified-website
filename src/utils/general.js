export function getPublicUrl(relativePath) {
  console.log(`../../${relativePath}`, import.meta.url, new URL(relativePath, import.meta.url).href);
  return new URL(relativePath, import.meta.url).href;
}

export function createDebounce(delayMs = 500) {
  let timeout = null;
  return function (fnc) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs);
  };
}
