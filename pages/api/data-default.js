const dataNext = {
  name: 'NEXT.JS-Project',
  children: [
    {
      name: 'pages',
      children: [
        { 
          name: 'api', 
          children: [
            {
              name: 'hello.js'
            }
          ] 
        },
        { name: '_app.js' },
        { name: 'index.js' },
      ],
    },
    {
      name: 'public',
    },
    {
      name: 'styles',
      children: [
        {
          name:'globals.css'
        },
      ],
    },
    { name: 'package-lock.json' },
    { name: 'package.json' },
    { name: 'README.md' },
  ],
};

const dataVue = {
  name: 'VUE3-Project',
  children: [
    {
      name: 'public',
      children: [
        { 
          name: 'index.html', 
        },
        { 
          name: 'src.js',
          children: [
            {
              name: 'HelloWorld.vue'
            }
          ] 
        },
        { name: 'App.vue' },
        { name: 'main.js' },
      ],
    },
    { name: 'package-lock.json' },
    { name: 'package.json' },
    { name: 'README.md' },
  ],
};

const dataJS = {
  name: 'JavaScript-Project',
  children: [
    { name: 'index.html' },
    { name: 'index.js' },
    { name: 'style.css' },
    { name: 'package.json' },
    { name: 'tsconfig.json' },
    { name: 'README.md' },
  ],
};

const dataAngular = {
  name: 'Angular-Project',
  children: [
    {
      name: 'src',
      children: [
        { 
          name: 'app', 
          children: [
            {
              name: 'app.component.css',
              name: 'app.component.html',
              name: 'app.component.ts',
              name: 'app.module.ts',
              name: 'hello.component.ts',
            }
          ] 
        },
        { name: 'index.html' },
        { name: 'main.ts' },
        { name: 'polyfills.ts' },
        { name: 'styles.css' },
      ],
    },
    { name: 'angular.json' },
    { name: 'package.json' },
    { name: 'tsconfig.json' },
  ],
};

export { dataNext, dataVue, dataJS, dataAngular };
