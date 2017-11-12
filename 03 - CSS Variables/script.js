const controls = document.querySelectorAll('.controls input');
controls.forEach(control =>
  control.addEventListener('input', e => {
    const target = e.target;
    const units = target.dataset.sizing || '';

    document.documentElement.style.setProperty(
      `--${target.name}`,
      `${target.value}${units}`
    );
  })
);
