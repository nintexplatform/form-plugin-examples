import { PieDataType } from './chart-pie.models';

export const fakeData: { [key: string]: PieDataType[] } = {
  chart1: [
    { value: 40, name: 'Invoices' },
    { value: 60, name: 'Payments' },
    { value: 50, name: 'Receipts' },
  ],
  chart2: [
    { value: 15, name: 'Invoices' },
    { value: 20, name: 'Payments' },
    { value: 30, name: 'Receipts' },
  ],
  chart3: [
    { value: 15, name: 'Spikes' },
    { value: 20, name: 'Demos' },
    { value: 30, name: 'Features' },
  ],
};
