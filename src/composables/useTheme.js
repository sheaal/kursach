import { ref, onMounted } from 'vue';

export function useTheme() {
    const theme = ref(localStorage.getItem('theme') || 'light');

    const setTheme = (newTheme) => {
        theme.value = newTheme;
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    onMounted(() => {
        document.documentElement.setAttribute('data-theme', theme.value);
    });

    return {
        theme,
        setTheme,
    };
}