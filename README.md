### ⚠ Work in Progress

# The Idea

Main goal of this project is to provide informations for interested potential customers about trips and other activities of Student Sports Club "GROM" in Lublin Poland. For further information about the Club's activities check [the official release page](https://uksgrom.lublin.pl)
( keep in mind that page's content due to its target is in polish language only ).

The challenge was to create fast, light and modern looking landing page, which would provide it's viewers such content as:
- dynamicaly generated gallery page
- news content providing essential informations and downloadable documents related to Club's activities
- other necessary information to show the Club as trustworthy and to keep customers in touch.

# Main Tech Used

### Frontend: 
<img width="25" src="https://nuxtjs.org/design-kit/colored-logo.svg" alt="Nuxt logo"> [**Nuxt.js V2**](https://nuxtjs.org/) with its [**Vue Router**](https://nuxtjs.org/docs/get-started/routing/) solution

<img width="20" src="https://vuejs.org/images/logo.png" alt="Vue logo"> [**Options API**](https://vuejs.org/api/options-state.html)

<img width="30" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt="Sass logo"> [**SCSS**](https://sass-lang.com/) with help of **BEM** methodology

### Backend: 
<img width="15" src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="Firebase logo"> [**Firebase Hosting**](https://firebase.google.com/products/hosting)

<img width="15" src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="Firebase logo"> [**Firebase Storage**](https://firebase.google.com/products/storage)

# Live version

For live version you can check the official release page: [uksgrom.lublin.pl](https://uksgrom.lublin.pl). 

# Local Setup

To start, download this repository on your local machine, then in the directory of the project run the following commands:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

```

For more information, check [official Nuxt documentation](https://nuxtjs.org/docs/get-started/installation)

## Styling 
The page has been styled with SCSS with BEM methodology. You can check the **global styles**, including base reset, variables and typography in `assets/scss` directory. Components' styling have been **scoped** to its' content.

The project uses [`sass`](https://www.npmjs.com/package/sass), [`sass-loader`](https://www.npmjs.com/package/sass-loader) and [`@nuxtjs/style-resources`](https://www.npmjs.com/package/@nuxtjs/style-resources) packages to properly import SCSS. You can find [global CSS imports](https://go.nuxtjs.dev/config-css) in `nuxt.config.js` file.

### Fonts used
- **Lato** for general purposes
- **Jost** for logo placeholder and main heading of the page

The fonts have been implemented via [global page headers](https://go.nuxtjs.dev/config-head) in `nuxt.config.js` file.

## Font Awesome
The project uses free assets of Font Awesome as an modern icon provider.
To understand the implementation you can check [Font Awesome documentation for Nuxt](https://fontawesome.com/v6/docs/web/use-with/vue/use-with#nuxt).

Keep in mind, that for faster usability at `plugins/fontawesome.js` icon component has been registered as:
```
Vue.component('FaIcon', FontAwesomeIcon);
```
and not as the documentation suggests:
```
Vue.component('font-awesome-icon', FontAwesomeIcon)
```

# ⏩ Further plans

The project is about to grow, as I search for and test a few other functionalities and solutions for them.

In its final version, there shall be present:

- Content Management System
- Dynamic page generation for `/aktualnosci/NuxtChild` path based on the CMS solution and for other pages if there is any need for such thing
- Rebuilt `AboutPage` component
- And other, depenging on page's future needs.
