export default defineAppConfig({
  docus: {
    title: 'UNITEC Restaurant',
    description: 'Sitio de documentación para el proyecto de la asignatura de Programación Orientada a Objetos Ciclo 24-1',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: '',
      github: '',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: false
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'UNITEC Restaurant'
    },

    footer: {
      credits: {
        text: 'Powered by Docus. Todos los Derechos Reservados Jesús Aurelio Castro Magaña  2023.'
      }
    }
  }
})