
export function debounce(fn, time = 500) {
  let timeout = null;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

export default debounce;