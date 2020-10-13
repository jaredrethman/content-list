<?php
/**
 * Simple Rest helper class for creating rest routes and overriding
 * rest payloads.
 *
 * @class: Rest
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

declare( strict_types=1 );

namespace TenUp\Plugin\ContentList;

use WP_REST_Response,
	WP_REST_Request,
	WP_REST_Server;

use TenUp\Plugin\ContentList\{
	utils
};

/**
 * Class Rest
 * @package TenUp\Plugin\ContentList
 */
class Rest extends Factory {

	/**
	 * Holds reference to default
	 * args.
	 *
	 * @var array $args
	 *
	 * @since 0.0.1
	 */
	protected $args = [
		'namespace' => 'tenup',
		'api_ver'   => 1,
	];

	/**
	 * @var array
	 */
	static protected $types_taxes = [];

	/**
	 * Rest constructor.
	 *
	 * @param array $args Overridable class arguments.
	 *
	 * @since 0.0.1
	 */
	public function __construct( $args = [] ) {

		$this->args = wp_parse_args(
			$args,
			$this->args + [
				'date_format' => get_option( 'date_format', 'F j, Y' )
			]
		);

		if ( empty( static::$types_taxes ) ) {
			static::$types_taxes = utils\types_and_taxes();
		}
	}

	/**
	 * Method for registering routes and modifying
	 * payloads.
	 *
	 * @param array $routes Method for registering routes.
	 *
	 * @since 0.0.1
	 *
	 * @return Rest
	 */
	public function register_routes( array $routes = [] ): Rest {
		add_action( 'rest_api_init', function () use ( $routes ) {
			foreach ( $routes as $route ) {
				register_rest_route(
					$this->args['namespace'] . '/v' . $this->args['api_ver'],
					'/' . $route['endpoint'],
					[
						'show_in_rest'        => true,
						'methods'             => WP_REST_Server::READABLE,
						'callback'            => $route['callback'],
						'permission_callback' => function ( WP_REST_Request $request ) {
							return current_user_can( 'edit_posts' );
						},
					]
				);
			}
		} );

		return $this;
	}

	/**
	 * Register Post Type and associated taxonomy payload filters.
	 *
	 * @since 0.0.1
	 *
	 * @return void
	 */
	public function load(): void {

		if ( ! current_user_can( 'edit_posts' ) || ! isset( $_REQUEST['content-list'] ) || 1 !== (int) $_REQUEST['content-list'] ) {
			return;
		}

		foreach ( static::$types_taxes as $type ) {
			$type_taxes = array_column( $type['taxonomies'], 'rest_base', 'name' );

			/**
			 * Prepare Types
			 */
			add_filter( 'rest_prepare_' . $type['name'], function ( WP_REST_Response $response ) use ( $type_taxes ) : WP_REST_Response {

				$data = [
					// Keep consistent with how WP handles wp_get_attachment_image_url() failures.
					'featured_media' => false,
					'id'             => $response->data['id'],
					'title'          => $response->data['title']['rendered'] ?? '',
					'excerpt'        => strip_tags( $response->data['excerpt']['rendered'] ?? '' ),
					'date'           => '',
				];

				if ( isset( $response->data['modified'] ) ) {
					$data['date'] = date( $this->args['date_format'], strtotime( $response->data['modified'] ) );
				}

				if ( isset( $response->data['featured_media'] ) && 0 !== (int) $response->data['featured_media'] ) {
					$data['featured_media'] = wp_get_attachment_image_src( $response->data['featured_media'], 'large' );
				}

				foreach ( array_values( $type_taxes ) as $taxonomy ) {
					if ( isset( $response->data[ $taxonomy ] ) ) {
						$data[ $taxonomy ] = $response->data[ $taxonomy ];
					}
				}

				/**
				 * TenUp\Plugin\ContentList\Rest\hooks\content\model
				 */
				$response->data = apply_filters( __CLASS__ . '\hooks\content\model', $data, $response->data );

				return $response;

			}, 10, 1 );

			/**
			 * Prepare Taxonomy(s)
			 */
			foreach ( array_keys( $type_taxes ) as $tax_name ) {
				add_filter( 'rest_prepare_' . $tax_name, function ( WP_REST_Response $response ): WP_REST_Response {

					/**
					 * TenUp\Plugin\ContentList\Rest\content\model
					 */
					$response->data = apply_filters( __CLASS__ . '\hooks\taxonomy\model', [
						'id'    => $response->data['id'],
						'label' => $response->data['name'],
					], $response->data );

					return $response;
				} );
			}
		}
	}
}
