(() => {
  const forms = document.querySelectorAll('[data-sp-signin-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = form.querySelector('input[type="email"]');
      if (!email || !email.value.trim() || !email.checkValidity()) {
        email?.reportValidity();
        return;
      }

      const base = form.dataset.loginBase;
      if (!base) return;

      const url = new URL(base, window.location.origin);
      url.searchParams.set('login_hint', email.value.trim());

      const returnTo = form.dataset.returnTo;
      if (returnTo) url.searchParams.set('return_to', returnTo);

      window.location.assign(url.toString());
    });
  });
})();
