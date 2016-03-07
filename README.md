# Angular2 Demo

A minimal Angular2 demo site using: 

- TypeScript
- SystemJS
- NPM Build
- SASS

You can see the a running demo [here](http://amcdnl.github.io/angular2-demo).

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

Below outlines a tree of how the components are arranged in the Angular2 component tree.

![component tree](http://content.screencast.com/users/amcdaniel22/folders/Snagit/media/1a70d1e6-a97f-4b2a-afcc-562f78979e91/2016-02-25_18-45-09.png)

## File Structure

The folder structure is aimed to encapsulate components into their own modules. In each component folder, it contains all the html, css, js for that component. Components that are not coupled to this application are grouped into a common folder for reuse.

```
└── src
    ├── app           -- root     component
    │   ├── header    -- header   component
    │   └── rsvp      -- rsvp     component 
    └── common        -- root     utilities and components that are reusable
        ├── parallax  -- parallax component
        └── utils     -- misc     utilities
```

## Credits

The demonstration was a project to learn Angular2 while teaching my [beautiful fiancée](https://www.linkedin.com/in/hpiernick) how to code our wedding website; I hope you enjoy! The project was presented at SFL Code Conference, for slides [click here](http://slides.com/austinmcdaniel/angular-2/).
