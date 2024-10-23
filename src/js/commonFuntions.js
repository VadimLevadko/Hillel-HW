// eslint-disable-next-line import/prefer-default-export
export const prependElement = (parentEl, elementToAppend) => {
  if (!parentEl || !elementToAppend) throw new Error('One argument was missed');
  return parentEl.prepend(elementToAppend);
};
