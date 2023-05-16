tailwind.config = {
  theme: {
    fontFamily: {
      'sans': ['Cerebri Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'white-lilac': '#f4f5fa',
        'castkill-white': '#e9ecf5',
        'ghost': '#C8CADA',
        'big-stone': '#1A2B42',
        'mountain-meadow': '#15AF71',
        'pastel-green': '#94E984',
        'bombay': '#80848e'
      },
      backgroundImage: {
        'green-linear-gradient': 'linear-gradient(120deg, hsla(110, 100%, 76%, 1) 0%, hsla(156, 79%, 38%, 1) 99%)',
        'green-radial-gradient': 'radial-gradient(circle, hsla(110, 100%, 76%, 1) 10%, hsla(156, 79%, 38%, 1) 99%)'
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
  }
}
