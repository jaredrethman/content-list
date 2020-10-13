# Filters

### JavaScript:

There is currently only one JS filter (more to come). The filter allows components to be injected either above or below the Layout panel inside the Inspector Controls. 

<details open>
<summary>Usage</summary>

```javascript
// Component to add to the Inspector Controls Layout section.
const {
	editor: {
		MediaPlaceholder,
	},
	components: {
		Button,
	},
	i18n: {
		__,
	},
	hooks: {
		addFilter,
	},
} = wp;

/**
 * Leading Image Component.
 *
 * @param block
 * @returns {*}
 * @constructor
 */
const LeadingImage = ( block ) => {
	const {
		props: {
			attributes: {
				leadingImage,
			}
		},
		attrsChange,
	} = block;

	return (
		<>
			<label className="components-base-control__label">
				{ __( 'Leading Image' ) }
			</label>
			<p />
			{ 0 === leadingImage.id ? (
				<MediaPlaceholder
					labels={ {
						title: __( 'Background Image' ),
						instructions: __( 'Choose an image to be used as the background image.' ),
					} }
					onSelect={ ( bgImage ) => {
						attrsChange( {
							id: bgImage.id,
							url: bgImage.url,
							alt: bgImage.alt,
						}, 'leadingImage' );
					} }
					accept="image/*"
					type="image"
					multiple={ false }
				/>
			) : (
				<>
					<img style={ { width: '100%' } } src={ leadingImage.url } alt={ leadingImage.alt } />
					<Button
						className="remove-image is-button button-secondary"
						onClick={ () => {
							attrsChange( {
								id: 0,
								url: '',
								alt: '',
							}, 'leadingImage' );
						} }
					>
						<div>Remove image</div>
					</Button>
				</>
			) }
			<p />
		</>
	);
};

// Add Filter
addFilter(
	'contentList.extraLayoutControls',
	'content-list/with-inspector-controls-layout',
	( OriginalInspectorControlsLayout ) => {
		return ( props ) => (
			<>
				<LeadingImage
					{ ...props }
				/>
				<OriginalInspectorControlsLayout
					{ ...props }
				/>
			</>
		);
	}
);
```

</details>

![Screenshot_2020-02-25_at_22.40.17](https://github.com/jaredrethman/content-list/blob/master/wiki/uploads/b5574f6570f2259c5e8ffb62eb5e0ca4/Screenshot_2020-02-25_at_22.40.17.png)

### PHP:

`TenUp\Plugin\ContentList\hooks\types_taxes`

Allows overriding of the Blocks reference to the sites public post types. Handy when needing to remove unwanted post types.

<details>
<summary>Usage</summary>

```php
add_filter(
	'TenUp\Plugin\ContentList\hooks\types_taxes',
	function ( $types_taxes ) {
		return array_values(
			array_filter(
				$types_taxes,
				function ( $type ) {
					return ! in_array( $type['name'], [ 'page' ] );
				}
			)
        );
	}
);
```

</details>

---

`TenUp\Plugin\ContentList\hooks\posts_per_page`

This will override the blocks posts per page when dealing with the API, however, this does not effect count of displayed items.

<details>
<summary>Usage</summary>

```php
add_filter(
	'TenUp\Plugin\ContentList\hooks\posts_per_page',
	function () {
		return get_option( 'posts_per_page', 10 );
	}
);
```

</details>

---

`TenUp\Plugin\ContentList\hooks\attributes`

This allows filtering of attributes passed to the block during block type registration. This can be helpful when needing to override display controls output or when needing brand new attributes to use in a JavaScript component filter.

<details>
<summary>Usage</summary>

```php
add_filter(
	'TenUp\Plugin\ContentList\hooks\posts_per_page',
	function ( $attributes ) {
		$attributes['leadingImage'] = [
			'type'    => 'object',
			'default' => [
				'id'  => 0,
				'url' => '',
				'alt' => '',
			],
		];

		return $attributes;
	} 
);
```

</details>








