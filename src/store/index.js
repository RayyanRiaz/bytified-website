import { reactive } from 'vue';

const screens = [
  { tag: 'sm', from: 0, to: 640 },
  { tag: 'md', from: 641, to: 768 },
  { tag: 'lg', from: 769, to: 1024 },
  { tag: 'xl', from: 1025, to: 1280 },
  { tag: '2xl', from: 1281, to: 5000 },
];

export const store = reactive({
  dims: {
    width: null,
    height: null,
  },
  size: 'sm',
  currentPage: 'index',
});

export const setDimsAndSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  store.dims = { width, height };
  store.size = screens.filter((v) => width >= v.from && width <= v.to)[0].tag;
};

export const setCurrentPage = (newPage) => {
  store.currentPage = newPage;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
