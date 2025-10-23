document.addEventListener('mouseover', e => {
  if(e.target.tagName === 'P' || e.target.tagName === 'IMG'){
    const sparkle = document.createElement('div');
    sparkle.className = 'wand-sparkle';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
});
