export default function getData(json, dataGetter) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  if (typeof dataGetter === 'function') {
    return dataGetter(json);
  }

  if (typeof dataGetter === 'string') {
    return json[dataGetter];
  }

  return json.data;
}