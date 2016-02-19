# Angular2 Demo

A minimal Angular2 demo site using: 

- TypeScript
- SystemJS
- NPM Build
- SASS

The demonstration was a project to learn Angular2 while teaching my [beautiful fiancée](https://www.linkedin.com/in/hpiernick) how to code our wedding website; I hope you enjoy!

## Commands

command | description
--- | ---
`npm run setup`| installs globals/etc
`npm run clean`| clean dist directory
`npm run build`| clean, ts & sass build
`npm run build:ts`| typescript build
`npm run build:sass`| sass build
`npm run build:css`| postcss build
`npm run watch`| clean/watch ts & sass
`npm run watch:ts`| watch typescript
`npm run watch:sass`| watch sass
`npm run dev`| build, watch, browsersync

## Component Tree

![component tree](http://content.screencast.com/users/amcdaniel22/folders/Snagit/media/9b704eb7-dd83-413b-88c0-605c93c26691/tree.png)

## File Structure

The folder structure is aimed to encapsulate components into their own modules. In each component folder, it contains all the html, css, js for that.  Components that are not coupled to this application are grouped into a common folder for reuse.

```
/src
  /app
    /header
    /rsvp
  /common
    /parallax
    /utils
```
