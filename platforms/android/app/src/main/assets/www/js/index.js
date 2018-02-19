var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/home/',
      url: './index.html',
    },
    {
      path: '/sejarah/',
      url: './pages/sejarah.html',
    },
    {
      path: '/struktur/',
      url: './pages/struktur.html',
    },
    {
      path: '/duta/',
      url: './pages/duta.html',
    },
    {
      path: '/ketua/',
      url: './pages/ketua.html',
    },
    {
      path: '/chatbox/',
      url: './pages/chatbox.html',
    },
    {
      path: '/website-cabang/',
      url: './pages/website_cabang.html',
    },
    {
      path: '/gallery/',
      url: './pages/gallery.html',
    },
    {
      path: '/kritik-saran/',
      url: './pages/kritik_saran.html',
    },
  ],
});

var mainView = app.views.create('.view-main');