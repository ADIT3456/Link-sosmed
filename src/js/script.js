//copy js

const actionLink = document.querySelectorAll('.link-card .link-action');

actionLink.forEach((action) => {
  action.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute('href'));
    // munculin notif copy
    document.getElementById('toast').innerHTML = `
    <div class="toast-container">
    <p> ✅Link berhasil disalin!</p>
  </div> 
  `;
    //   menghilanglan notif
    setTimeout(() => {
      document.querySelector('#toast .toast-container').classList.add('toast-gone');
    }, 300);

    setTimeout(() => {
      document.querySelector('#toast .toast-container').remove();
    }, 2000);
  });
});

// hpver sosmed

document.querySelectorAll('.sosmed i').forEach((sosmed) => {
  sosmed.addEventListener('mouseenter', (e) => {
    sosmed.classList.remove('ph');
    sosmed.classList.add('ph-fill');
  });
  sosmed.
    addEventListener("mouseleave", () => {
      sosmed.classList.remove('ph-fill');
      sosmed.classList.add('ph');
    });
});

// animation text 
document.addEventListener("scroll", (e) => {
    document.querySelector(".text-animation").style.transform = `translateX(${
      window.scrollY / 3
    }px)`;
  });