const updatePluginValue = (element, data) => {
  const args = {
    bubbles: true,
    cancelable: false,
    composed: true,
    ...data
  };
  const event = new CustomEvent('ntx-value-change', args);
  element.dispatchEvent(event);
  return event;
};

export { updatePluginValue as u };
