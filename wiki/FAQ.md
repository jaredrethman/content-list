# FAQ:

> "My Post Type is not appearing in the Content Type dropdown" 

- In order for a custom post type and attached taxonomies to appear in the Content List they'll need to be registered with `'show_in_rest' => true` & `'public' => true` arguments on `init` hook with priority < `99`.

> "My Taxonomy is not appearing when associated Content Type is selected" 

- Firstly, the above will need to be true.  
- In order for your taxonomies to appear in the Content List they'll need to be registered with `'show_in_rest' => true` & `'public' => true` argument and `init` hook with priority < `99`.