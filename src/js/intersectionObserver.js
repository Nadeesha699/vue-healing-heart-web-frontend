export const observeElements = () => {
    const elements = document.querySelectorAll(".test");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("yes");
          } else {
            entry.target.classList.remove("yes");
          }
        });
      },
      { threshold: 0.5 }
    );
    elements.forEach((el) => observer.observe(el));
  };
  