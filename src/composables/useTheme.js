export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
}