import { customRef } from 'vue';

export default function useDebouncedRef(value:String, delay = 200) {
  let timeout:number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    }
  });
};