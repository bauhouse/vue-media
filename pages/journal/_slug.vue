<template>
  <div class="page journal">
    <hero-section
      title="Journal"
      subtitle="Progress and the evolution of ideas."
      image="https://source.unsplash.com/CxYHfBkC0vs/1600x900"
      image-alt="Filling a blank page"
      color="secondary"
      size="is-large"
    />
    <section-intro
      title="Cultural Literacy"
      subtitle="Navigating the social, political, and economic landscape of cultural identity."
    >
      <no-ssr>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
        />
      </no-ssr>
    </section-intro>
  </div>
</template>

<script lang="js">
  import HeroSection from '~/components/HeroSection'
  import SectionIntro from '~/components/SectionIntro'
  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown"

  export default {

    async asyncData ({params, app}) {
      const fileContent = await import(`~/content/articles/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        owner: attr.owner,
        colors: attr.colors,
        role: attr.role,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        related: attr.related,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns
      }
    },

    components: {
      HeroSection,
      SectionIntro,
      DynamicMarkdown
    },

    head () {
      return {
        title: this.pageTitle,
        meta: [
          { name: "author", content: "Stephen Bau" },
          { name: "description", property: "og:description", content: this.description, hid: "description" },
          { property: "og:title", content: this.pageTitle },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.description },
          { name: "twitter:image", content: this.ogImage }
        ]
      };
    },

    computed: {
      ogImage () {
        return `${process.env.baseUrl}/images/articles/${this.id}/_thumbnail.jpg`;
      },
      pageTitle () {
        return this.title + ' | Design Influences';
      }
    }
  }
</script>
