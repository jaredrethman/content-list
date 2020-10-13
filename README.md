# Content List:

## Requires:

* Node >= 8.12.2
* WordPress >= v5.2
* PHP >= 7.2

## Features:

* WebPack 4 for Module Bundling. WebPack-Dev-Server for development.
* Hot Module Replacement with react-hot-loader.
* Any post type, and associated taxonomy, content fetching.
* Sortable components.
* Component visibility toggling.
* Individual slot curation. 
* Fetched content sorting.
* Dynamic content slots.

## Developing:
* `npm i && npm run dev`, or for https `dev:s`.

## Deploying:
* `npm run deploy`, which is an alias for `npm run prod && npm run build`

## Road-map:
* Add Jest.

## Known issues:
* When `npm run dev` & `SCRIPT_DEBUG` is set to true. There is a warning in the console relating to React Sortable HOC on this [issue](https://github.com/styled-components/styled-components/issues/2154).
