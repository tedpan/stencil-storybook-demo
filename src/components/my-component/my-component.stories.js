import readme from './readme.md';

export default {
  title: 'My Component',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const Default = () => `
  <my-component first="Millie" middle="Bobby" last="Brown"></my-component>
`;
