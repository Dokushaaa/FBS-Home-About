/** @type {import('tailwindcss').Config} */
import {
  fluidExtractor,
  fluidCorePlugins,
  defaultThemeScreensInRems,
  defaultThemeFontSizeInRems,
} from "fluid-tailwind";
module.exports = {
  content: ["./dist**/*.{html,js}"],
  extract: fluidExtractor(),
  theme: {
    extend: {
      fontSize: defaultThemeFontSizeInRems,
      screens: defaultThemeScreensInRems,
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        headerBannerBg: "url(../dist/img/bg3.svg)",
        project1: "url(../dist/calculator-solid.png)",
        project2: "url(../dist/img/chalkboard-user-solid.png)",
        project3: "url(../dist/img/code-solid.png)",
        logo__main: "url(../dist/img/headset-solid.png)",
        heroBanner: "url(../dist/img/fbs-banner-bg.png)",
        offer: "url(../dist/img/what-we-offer-bg-scaled.jpg)" ,
       
      },
      backgroundPosition: {
        'n-vis-top': 'right top 1rem',
      },
      colors:{
      
        dark: "212020",
        light: "#fafafa",
        secondary:"#6a103f",
       
        
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        raleway: ['Raleway', 'serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'gradient': 'Gradient 15s ease-in forwards',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideDown': 'slideDown 0.5s linear',
        'fadeInLeft': 'fadeInLeft 1s ease-out',
        'fadeInRight': 'fadeInRight 1s ease-out',
        'tagAnimation': 'tagAnimation 1s ease-out',
        'Mob': 'Gradient 10s ease-in forwards',
      },
      content:{
        quoteLeft: 'url("../dist/img/quote-left-solid.svg")',
        quoteRight: 'url("../dist/img/quote-right-solid.svg")',
      },
    },
  },
  plugins: [fluidCorePlugins],
}

