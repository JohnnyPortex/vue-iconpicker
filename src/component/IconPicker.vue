<template>
  <div>
    <div ref="dropdown" class="relative inline-block" @click="toggleDropdown">
      <button class="p-2 flex items-center space-x-2 border rounded-md shadow-sm" :class="selectTheme.button">
        <span v-if="selectedIcon" class="text-xl">
          <i :class="selectedIcon"></i>
        </span>
        <span class="text-sm">{{ label }}</span>
      </button>

      <div v-if="isOpen" class="absolute left-0 mt-2 w-60 shadow-lg rounded-lg max-h-80" :class="selectTheme.dropdown"
        style="z-index: 999999;" :style="{ maxHeight: '300px', height: 'auto', minHeight: '150px' }">
        <input ref="searchInput" v-model="searchQuery" type="text" placeholder="Search icon..."
          class="w-full p-2 border-b mb-2 rounded-md focus:outline-none" :class="selectTheme.searchInput" @click.stop />

        <div class="grid grid-cols-4 gap-2 p-2 max-h-60 overflow-y-auto" v-if="filteredIcons.length > 0">
          <button v-for="icon in filteredIcons" :key="icon" @click="selectIcon(icon)"
            class="p-2 text-center text-xl rounded-md transition" :class="selectTheme.iconList">
            <i :class="icon"></i>
          </button>
        </div>
        <div v-else class="text-sm px-2 text-center w-full">Icon not found</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineEmits } from 'vue';
import { icons } from '@/assets/fontawesome-icons.js';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  theme: {
    type: String,
    required: false,
    default: 'dark',
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  }
});

const isOpen = ref(false);
const selectedIcon = ref(props.modelValue);
const searchQuery = ref('');
const dropdown = ref(null);
const searchInput = ref(null);

const filteredIcons = computed(() => {
  return icons.filter(icon =>
    icon.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectTheme = computed(() => themeClasses[props.theme])

const themeClasses = {
  light: {
    button: 'bg-white text-gray-600 hover:bg-gray-300',
    dropdown: 'bg-white text-gray-600',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-gray-200 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    iconList: 'hover:bg-gray-200 hover:text-gray-900'
  },
  dark: {
    button: 'bg-gray-700 text-gray-300 border-gray-900 hover:bg-gray-600',
    dropdown: 'bg-gray-700 text-gray-300',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    iconList: 'hover:bg-gray-200 hover:text-gray-900'
  },
  sepia: {
    button: 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100',
    dropdown: 'bg-yellow-100 text-yellow-800',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-yellow-200 text-yellow-800 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent',
    iconList: 'hover:bg-yellow-300 hover:text-yellow-900'
  },
  dracula: {
    button: 'bg-gray-800 text-pink-200 hover:bg-gray-700',
    dropdown: 'bg-gray-800 text-pink-200',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-gray-900 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent',
    iconList: 'hover:bg-gray-700 hover:text-pink-400'
  },
  solarized: {
    button: 'bg-yellow-400 text-gray-900 hover:bg-yellow-300',
    dropdown: 'bg-gray-800 text-yellow-200',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-gray-700 text-yellow-300 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent',
    iconList: 'hover:bg-yellow-200 hover:text-gray-800'
  },
  nord: {
    button: 'bg-blue-800 text-gray-200 hover:bg-blue-700',
    dropdown: 'bg-blue-900 text-gray-200',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-blue-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    iconList: 'hover:bg-blue-600 hover:text-gray-300'
  },
  monokai: {
    button: 'bg-purple-600 text-orange-100 hover:bg-purple-500',
    dropdown: 'bg-purple-700 text-orange-200',
    searchInput: 'w-full p-2 border-b mb-2 rounded-md bg-purple-800 text-orange-300 placeholder-orange-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent',
    iconList: 'hover:bg-purple-500 hover:text-orange-400'
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectIcon = (icon) => {
  selectedIcon.value = icon;
  emit('update:modelValue', icon)
  isOpen.value = false;
};

const closeDropdown = (event) => {
  if (
    dropdown.value &&
    !dropdown.value.contains(event.target) &&
    !searchInput.value.contains(event.target)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
input {
  transition: background-color 0.3s ease;
}

input:focus {
  background-color: #f3f4f6;
}
</style>