import memoji from "../assets/memoji.webp";
import Doc from "../icons/Doc.astro";
import LinkedIn from "../icons/LinkedIn.astro";
import GitHub from "../icons/GitHub.astro";
import me from "../assets/me.jpeg";

export const data = {
  welcome: {
    greet: "Hola 👋🏼, soy Lorenzo",
    title: "Desarrollador Web",
    subtitle: "Entusiasta de IA y tecnología.",
    ctaText: "Descargar CV",
    ctaIcon: Doc,
    image: memoji.src,
    socialLinks: {
      github: {
        icon: GitHub,
        url: "https://github.com/looreenz",
      },
      linkedin: {
        icon: LinkedIn,
        url: "https://www.linkedin.com/in/lorenzo-cremonese-06b595358/",
      },
    },
  },
  experience: {
    title: "Experiencia",
    jobs: [
      {
        position: "Desarrollador Web",
        company: "Huming Music SL",
        duration: "Junio 2025 - Presente",
        descriptionParagraphs: [
          "Desarrollo de plataforma marketplace para artistas emergentes.",
          "Desarrollo de plataforma dashboard para artistas, promotores y agencias.",
          "Optimización de performace y SEO utilizando mejores prácticas, desarrollando en Next.js, Tailwindcss y GCS con CI/CD.",
        ],
      },
    ],
  },
  about: {
    title: "Sobre mí",
    image: me.src,
    paragraphs: [
      "Me llamo Lorenzo Cremonese, Desarrollador de Aplicaciones Web italiano 🇮🇹, viviendo en España 🇪🇸.",
      "Me apasiona crear proyectos que unan tecnología y creatividad, con la meta de crecer profesionalmente, explorando la inteligencia artificial, la ciberseguridad y el diseño de soluciones que hagan la vida más simple.",
      "Fuera del código, encuentro disciplina en la calistenia 🏋🏻‍♂️, motivación en el aprendizaje de idiomas 🌏, inspiración en la música 🎹 y adrenalina en el mundo de los motores 🏎️.",
      "Soy curioso, constante y siempre busco crecer, dentro y fuera de la pantalla.",
    ],
  },
};
