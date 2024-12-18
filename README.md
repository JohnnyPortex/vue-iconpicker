

# vue-iconpicker

A simple and customizable Font Awesome icon picker component for Vue.js 3. The component allows users to select an icon from a searchable dropdown, which can be easily styled using various themes. This package integrates with TailwindCSS for smooth UI styling.

## Features

- **Font Awesome Icons**: Built-in integration with Font Awesome icons.
- **Searchable Dropdown**: Easily filter and find icons with the search functionality.
- **Customizable Themes**: Choose from multiple predefined themes like dark, light, dracula, sepia, etc.
- **Vue 3 Composition API**: Built with Vue 3’s Composition API for better performance and flexibility.
- **TailwindCSS Integration**: Styled with TailwindCSS for a sleek and modern interface.
- **Easy to Use**: Simple API to integrate into your Vue projects.

## Installation

To install `@johnnydeboas/vue-iconpicker`, you can use npm or yarn:

```bash
npm install @johnnydeboas/vue-iconpicker
# or
yarn add @johnnydeboas/vue-iconpicker

Make sure you have Font Awesome icons available in your project as well:

```bash
npm install @fortawesome/fontawesome-free
```

## Usage

### Importing the component

In your Vue component, import `IconPicker` and use it in your template:

```javascript
<template>
  <div>
    <IconPicker v-model="selectedIcon" label="Select an Icon" theme="dark" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconPicker from '@johnnydeboas/vue-iconpicker';

const selectedIcon = ref(null);
</script>
```

### Props

| Prop        | Type    | Default | Description                                  |
|-------------|---------|---------|----------------------------------------------|
| `label`     | String  | ''      | The label text displayed above the button.   |
| `theme`     | String  | 'dark'  | The theme of the icon picker (options: `dark`, `light`, `sepia`, `dracula`, `solarized`, `nord`, `monokai`). |

### Events

- **icon-selected**: Fired when an icon is selected, passing the selected icon name.

### Example

```javascript
<template>
  <div>
    <IconPicker
      v-model="selectedIcon"
      label="Select an Icon"
      theme="light"
      @icon-selected="handleIconSelected"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconPicker from 'vue-iconpicker';

const selectedIcon = ref(null);

const handleIconSelected = (icon) => {
  console.log('Selected Icon:', icon);
};
</script>
```

## Custom Themes

You can customize the theme of the icon picker by setting the `theme` prop. Available themes include:

- `light`: Light background with dark text.
- `dark`: Dark background with light text.
- `sepia`: Warm, sepia-like colors.
- `dracula`: Dark with pink accents.
- `solarized`: Warm tones with blue accents.
- `nord`: Blueish tones with white text.
- `monokai`: Purple with orange accents.

## Development

To build and run the development server:

```bash
npm run dev
# or
yarn dev
```

To build the component for production:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the ISC License.

## Credits

- **Vue.js**: The core framework for building the component.
- **Font Awesome**: Provides the icons used in the picker.
- **TailwindCSS**: Provides the utility-first CSS framework for styling the component.

---

Feel free to open issues or contribute to the project!

by JohnnyDeBoas