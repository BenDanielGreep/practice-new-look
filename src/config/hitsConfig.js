// ------------------------------------------
// Configuration for results and individual hits
// Holds both content results and product results
// ------------------------------------------

import { atom } from 'recoil';

// ------------------------------------------
// This const defines a map of attributes used in the app to the names of the attributes in your own index
// Please change only the values in this const i.e. the strings on the right of the semi-colons
// If you do not have an attribute in your data please do not remove it from here, contact #help-demos
// ------------------------------------------
export const hitsConfig = {
  objectID: 'objectID',
  productName: 'name',
  brand: 'brand',
  category: 'categories',
  reviewScore: 'reviewScore',
  reviewCount: 'reviewCount',
  categories: 'categories',
  colour: 'colourName',
  genderFilter: 'department',
  hierarchicalCategories: 'categories',
  sizeFilter: 'sizeFilter',
  price: 'price',
  image: 'image',
  imageAlt: 'modelImage',
  hierarchicalCategoriesLvl0: 'categories.lvl0',
  hierarchicalCategoriesLvl1: 'categories.lvl1',
  hierarchicalCategoriesLvl2: 'categories.lvl2',
  hierarchicalCategoriesLvl3: 'categories.lvl3',
  colourHexa: 'colour_hexa_v6',
};

// ------------------------------------------
// This const defines what parts of a hit you want to show on the PDP or not
// ------------------------------------------
export const PDPHitSections = {
  price: true,
  productName: true,
  brand: true,
  sizeFilter: false,
  colour: true,
};

// Similar structure to previous const, please do not remove if you don't use articles
export const contentArticlesConfig = atom({
  key: 'contentArticlesConfig', // unique ID (with respect to other atoms/selectors)
  default: {
    objectID: 'objectID',
    title: 'Title',
    headings: 'Subtitle',
    content: 'content',
    date: 'Date',
    description: 'description',
    image: 'Image Link',
  },
});

// Choose number of records the app should display per results page
export const hitsPerPage = {
  numberNotInjected: 15,
  numberInjected: 14,
};

// Please ignore this atom
export const hitsAtom = atom({
  key: 'hitsAtom', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

// Please ignore this atom
export const hitAtom = atom({
  key: 'hitAtom', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
