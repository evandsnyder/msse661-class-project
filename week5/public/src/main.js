const doLogin = async (e) =>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await login({username, password});

    const {auth, access_token, refresh_token} = res;

    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);

    window.location.href = 'home.html';
  };
  
  const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    register({
      username: username,
      email: email,
      password: password
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doLogout = function(e) {
    e.preventDefault();
    logout();

    window.location.href = '/';
  };

  (() => {
    if(!storageHasData()) return;

    const isAuth = getStorage('isAuth');

    !isAuth ? document.getElementById('logout').style.display = 'none' : document.getElementById('logout').style.display = 'block';

  });