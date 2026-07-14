// Animate the ER-diagram connector lines drawing in on load
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const paths = document.querySelectorAll('#schema-svg .links path');

  if (!prefersReduced) {
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.animate(
        [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
        { duration: 900, delay: 200 + i * 150, fill: 'forwards', easing: 'ease-out' }
      );
    });

    // Note: these groups already use the SVG "transform" attribute (translate)
    // for their layout position. Animating CSS "transform" here would override
    // that attribute and collapse every node to the same spot — so we only
    // fade opacity, never touch transform.
    const nodes = document.querySelectorAll('#schema-svg .table-node');
    nodes.forEach((node, i) => {
      node.style.opacity = 0;
      node.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 500, delay: 100 + i * 120, fill: 'forwards', easing: 'ease-out' }
      );
    });
  }

  // Gentle reveal for sections as they enter the viewport
  const revealTargets = document.querySelectorAll('.section, .summary, .contact');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealTargets.forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(16px)';
      io.observe(el);
    });
  }
});
