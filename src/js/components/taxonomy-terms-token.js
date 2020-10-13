/**
 * External dependencies
 */

const {
	compose: { withInstanceId },
	components: { Button },
	i18n: { __, sprintf },
} = wp;

const { noop } = window.lodash;

/**
 * Content Select Component.
 *
 * @param {{}} status React props object.
 * @param {string} status.title Label for token.
 * @param {number} status.index Token index.
 * @param {Function} status.onClickRemove Token onClickRemove listener.
 * @param {Function} status.onMouseEnter Token onMouseEnter listener.
 * @param {Function} status.onMouseLeave Token onMouseLeave listener.
 * @param {Function} status.instanceId React component instance id.
 * @returns {*}
 * @class
 */
function TaxonomyTermsToken({
	title,
	index,
	onClickRemove = noop,
	onMouseEnter,
	onMouseLeave,
	instanceId,
}) {
	const tokenClasses = 'components-form-token-field__token cl-block__token';

	return (
		<div
			className={tokenClasses}
			{...{
				title,
				onMouseEnter,
				onMouseLeave,
			}}
		>
			<div
				className="components-form-token-field__token-text"
				id={`components-form-token-field__token-text-${instanceId}`}
			>
				<span aria-hidden="true">{title}</span>
			</div>

			<Button
				className="components-form-token-field__remove-token"
				icon="dismiss"
				onClick={() => onClickRemove({ index })}
				label={sprintf(__('Remove %s', 'tenup'), title)}
				aria-describedby={`components-form-token-field__token-text-${instanceId}`}
			/>
		</div>
	);
}

export default withInstanceId(TaxonomyTermsToken);
