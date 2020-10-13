# Partials

The Content List exposes a flexible architecture for overriding the output of the block.

### Directory structure:

```
- ./plugins
    - ./content-list
      - ./partials
         - block.php
         - content.php
         - content-landscape.php
         - content-portrait.php
         - content-terms.php
```
     
In order to overwrite any of these, simply copy the partial to your theme. Let's overwrite the `block.php` partial.

```
- ./themes
    - ./theme-dir
        - ./partials
            - ./content-list
                - block.php
```

These partial work by sending properties down to partials.