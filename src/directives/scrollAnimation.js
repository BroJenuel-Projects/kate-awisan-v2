const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("a-enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);
export default {
  beforeMount(el) {
    el.classList.add("a-before-enter");
    animatedScrollObserver.observe(el);
  },
};
