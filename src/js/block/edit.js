/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

// Internal Dependencies
import Search from '../components/search';
import InspectorControls from './inspector-controls';
import { getSlots } from '../common/utils';
import { http } from '../common/http';
import { ContentListProvider } from '../context';
import Content from '../components/content';

// We don't have control over ReactDOM in Gutenberg.
setConfig({
	showReactDomPatchNotification: false,
});

/**
 * WordPress dependencies
 */
const {
	element: { useState },
	components: { Modal, Button },
	data: { dispatch },
	i18n: { __ },
} = wp;

const defaultItem = {
	id: 0,
	title: '',
	featured_media: '',
};

/**
 * ContList - React Component
 *
 * @param {{}} props React props
 * @returns {*}
 * @class
 *
 * @since 0.0.1
 */
function ContentList(props) {
	const {
		clientId,
		attributes,
		attributes: { ids = [], columns, display, queryArgs, itemsToShow, orientation, style },
		setAttributes,
	} = props;

	/**
	 * Current item in edit/search
	 */
	const [itemInEdit, stateItemInEdit] = useState(0);

	/**
	 * Block context/state for item in search.
	 */
	const [itemInSearch, _setItemInSearch] = useState(0);

	const setItemInSearch = (i = 0) => {
		_setItemInSearch(i);
	};

	/**
	 * This function is used throughout ContentList* components
	 * to push updates back to setAttributes.
	 *
	 * @param {Array | {} | string} val Holds value to update attributes with.
	 * @param {string} key Which key in our attributes model to update.
	 * @param {string|null} type Typeof data we're passing to this function.
	 *
	 * @since 0.0.1
	 */
	const attrsChange = (val, key, type = null) => {
		const currentVal = attributes[key] ?? [];

		switch (type) {
			case null:
			default:
			case 'string':
				setAttributes({
					[key]: val,
				});
				break;
			case 'object':
				setAttributes({
					[key]: {
						...currentVal,
						...val,
					},
				});
				break;
			case 'array':
				setAttributes({
					[key]: [...currentVal, ...val],
				});
				break;
		}
	};

	/**
	 * On Sort End, fired from our ContentSortable component.
	 * Will update the positions of our content.
	 *
	 * @param {Array} _ids Array of ids.
	 * @param {{number}} indices Object of new and old indexes
	 * @param {number} indices.oldIndex Old index of moved item.
	 * @param {number} indices.newIndex New index of moved item.
	 *
	 * @since 0.0.1
	 */
	const onSortEnd = (_ids, { oldIndex, newIndex }) => {
		attrsChange(arrayMove(_ids, oldIndex, newIndex), 'ids', null);
	};

	/**
	 * Function for moving the Search to a specific ids item, indicating that it is
	 * currently being edited.
	 *
	 * @param {number} i The ids index to move our search to. 0 removes entirely.
	 *
	 * @since 0.0.1
	 */
	const moveSearchToItem = (i = 0) => {
		stateItemInEdit(i);
	};

	/**
	 * Fetch content http method.
	 *
	 * @param {{}} fetchArgs Fetch arguments.
	 * @param {string} fetchArgs.path The API endpoint to retrieve ids from.
	 * @param {{}} fetchArgs.params Query params to bind to our request.
	 *
	 * @since 0.0.1
	 */
	const fetchContent = ({ path, params }) => {
		http(path, params).then((res) => {
			let content = res;
			if (res.length < 1) {
				content = [];
			}
			attrsChange(
				getSlots(itemsToShow, content).reduce((acc, v) => {
					acc.push(v.id);
					return acc;
				}, []),
				'ids',
			);
			dispatch('tenup/content').setContent(content);
		});
	};

	/**
	 * Add separator to UI if landscape.
	 *
	 * @returns {Array}
	 *
	 * @since 0.0.1
	 */
	const orientateDisplay = () => {
		const orientatedDisplay = [...display];
		const separatorIndex = orientatedDisplay.findIndex((d) => d.name === 'separator');
		if (orientation === 'landscape') {
			if (separatorIndex === -1) {
				orientatedDisplay.splice(1, 0, { name: 'separator', value: true });
				attrsChange(orientatedDisplay, 'display');
			}
		} else if (separatorIndex !== -1) {
			orientatedDisplay.splice(separatorIndex, 1);
		}
		return orientatedDisplay;
	};

	// Ensure we're comparing against at least 1 column
	const rowCount = Math.ceil(itemsToShow / columns);

	return (
		<ContentListProvider value={{ queryArgs, display, itemInSearch, setItemInSearch }}>
			{itemInSearch !== 0 && (
				<Modal
					title={__('Search for content', 'tenup')}
					onRequestClose={() => _setItemInSearch(0)}
				>
					<Search
						index={itemInSearch}
						content={ids}
						clientId={clientId}
						onUpdate={(val, key, type) => {
							attrsChange(val, key, type);
							setItemInSearch();
						}}
						closeSearch={setItemInSearch}
					/>
				</Modal>
			)}
			<div className={`wp-block-content-list${style === '' ? '' : ` ${style}`}`}>
				<InspectorControls
					{...{
						props,
						...{
							style,
							columns,
							itemsToShow,
							orientation,
							attrsChange,
							fetchContent,
							display: orientateDisplay(),
						},
					}}
				/>
				<div style={{ position: 'relative' }}>
					<Content
						clearItem={(i) => {
							const newContent = [...ids];
							newContent.splice(i, 1, defaultItem);
							attrsChange(newContent, 'ids');
						}}
						distance={1}
						{...{
							ids,
							columns,
							onSortEnd,
							itemInEdit,
							orientation,
							attrsChange,
							itemsToShow,
							moveSearchToItem,
							display: orientateDisplay(),
						}}
					/>
					<div
						className={`cl-block__grid-col-${columns} cl-block__grid cl-block__search ${
							itemInEdit > 0 ? ' cl-block__search-visible' : ''
						}`}
						style={{ gridAutoRows: `${100 / rowCount}%` }}
					>
						<div className="cl-search-form__form">
							<Button
								icon={'no-alt'}
								label={__('Close', 'tenup')}
								onClick={() => moveSearchToItem()}
							/>
							<Search
								index={itemInEdit}
								content={ids}
								clientId={clientId}
								onUpdate={(val, key, type) => {
									attrsChange(val, key, type);
									moveSearchToItem();
								}}
								closeSearch={moveSearchToItem}
							/>
						</div>
					</div>
				</div>
			</div>
		</ContentListProvider>
	);
}

if (NODE_ENV === 'development') {
	ContentList.propTypes = {
		clientId: PropTypes.string,
		setAttributes: PropTypes.func,
		attributes: PropTypes.shape({
			itemsToShow: PropTypes.number,
			columns: PropTypes.number,
			display: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string,
					id: PropTypes.number,
					settings: PropTypes.arrayOf(
						PropTypes.shape({
							name: PropTypes.string,
							value: PropTypes.oneOfType([
								PropTypes.string,
								PropTypes.number,
								PropTypes.bool,
							]),
						}),
					),
				}),
			),
			style: PropTypes.string,
			orientation: PropTypes.string,
			ids: PropTypes.arrayOf(PropTypes.number),
			queryArgs: PropTypes.shape({
				contentType: PropTypes.string,
        		per_page: PropTypes.number, // eslint-disable-line
				taxonomies: PropTypes.arrayOf(
					PropTypes.shape({
						terms: PropTypes.arrayOf(PropTypes.number),
						name: PropTypes.string,
					}),
				),
				offset: PropTypes.number,
			}),
		}),
	};
}

export default NODE_ENV === 'development' ? hot(ContentList) : ContentList;
