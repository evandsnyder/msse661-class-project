(() => {
    const isAuth = getStorage('isAuth');
    if (!isAuth) {
      logout();
      window.location.href = '/index.html';
    }
  })();