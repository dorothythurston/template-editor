import en from '../locales/en.json';

const T = {
  translate: (string) => {
    const keys = string.split('.');
    let value = en;
    keys.forEach(key => {
      value = value[key];
    });
    return value;
  }
}

export default T;
