<?php
/**
 * Simple Factory Pattern abstraction, for (mostly) syntactical sugar.
 *
 * @class: Factory
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

declare( strict_types=1 );

namespace TenUp\Plugin\ContentList;

use ReflectionClass,
	ReflectionException;

/**
 * Class Factory
 *
 * @package Clarion
 */
if ( ! class_exists( __NAMESPACE__ . '\\Factory' ) ) {

	/**
	 * Class Factory
	 * @package TenUp\Utils
	 */
	abstract class Factory {
		/**
		 * Static method, Create is intended
		 * to provide syntactical sugar for class declaration.
		 *
		 * @return object Returns new class object.
		 */
		public final static function init() {
			/**
			 * Inheriting class name
			 *
			 * @var string $called_class
			 */
			$called_class = get_called_class();
			/**
			 * Inheriting class arguments
			 *
			 * @var array $args
			 */
			$args = func_get_args();

			try {
				$reflector = new ReflectionClass( $called_class );
				$instance  = $reflector->newInstance( ...$args );

				/**
				 * Return new class object.
				 */
				return $instance;
			} catch ( ReflectionException $e ) {
				_doing_it_wrong( __CLASS__, $e, '0.0.1' );
			}
		}
	}
}