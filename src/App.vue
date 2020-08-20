<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html{
  background: 
    linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 100%) no-repeat,
    url(./assets/pattern.png);
  background-size: auto;
  height: 100%;
}

@font-face{
  font-family: exo2;
  src: url('./assets/fonts/Exo2.0-Thin.otf') format('opentype');
}

@font-face{
  font-family: trebuc;
  src: url('./assets/fonts/trebuc.ttf') format('opentype');
}

@font-face{
  font-family: trebucbd;
  src: url('./assets/fonts/trebucbd.ttf') format('opentype');
}

#app {
  font-family: 'exo2';
}
</style>
