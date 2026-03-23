import { onMounted, ref } from 'vue';

const getWindow = () => {
    const windowWidth = ref(0);
    const windowHeight = ref(0);

    const updateWindow = () => {
        windowWidth.value = window.innerWidth;
        windowHeight.value = window.innerHeight;
    };

    updateWindow();
    onMounted(() => {
        updateWindow();
        window.addEventListener('resize', updateWindow);
    });
    return { windowWidth, windowHeight };
};
export {
    getWindow,
};
