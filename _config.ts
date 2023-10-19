import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import pagefind from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
    location: new URL("https://jellycrot.com/"),
    components: {
        variable: "components",
    },
    server: {
        port: 3000,
        page404: "/404/",
        open: true,
    }
});
site
    .copy("static", ".")
    .use(date())
    .use(metas())
    .use(pagefind({
        ui: {
            resetStyles: true,
        },
    }))
    .use(sitemap())
    .use(tailwindcss({
        options: {
            theme: {
                colors: {
                    white: '#fff6f9',
                    black: '#181819',
                    pink: {
                        200: '#f6cdcb',
                        400: '#f79ca1',
                        600: '#ff3e8b',
                        800: '#ee0e64',
                    },
                    blue: {
                        200: '#88a1d7',
                        400: '#7987ce',
                        600: '#6a67c5',
                    },
                    green: {
                        200: '#7bbc99',
                        400: '#70ab99',
                        600: '#527e81',
                    },
                    brown: {
                        200: '#925b6e',
                        400: '#76445f',
                        600: '#673146',
                    },
                },
                fontFamily: {
                    'sans': ['Roboto', 'sans-serif'],
                },
            },
        },
    }))
    .use(postcss());

export default site;
