export const updatePluginValue = <T>(
  element: HTMLElement,
  data: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    detail?: T;
  }
) => {
  const args = {
    bubbles: true,
    cancelable: false,
    composed: true,
    ...data,
  };

  const event = new CustomEvent('ntx-value-change', args);
  element.dispatchEvent(event);
  return event;
};
