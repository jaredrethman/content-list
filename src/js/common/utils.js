const {
	typesTaxes,
	config: { postsPerPage },
} = tenUp;

/**
 * Parses the REST response from wp-api
 *
 * @todo This function is no longer needed. Double check
 *
 * @param {Array} content
 * @param {{}} args
 * @returns {Array}
 */
export const prepareContent = (content, args = {}) => {
	const nArgs = {
		...{
			ppp: 0,
			slot: {},
		},
		...args,
	};

	const reducedContent = [...content];

	/**
	 * If our expected count is less then provided
	 * add default slots for the difference.
	 */
	if (reducedContent.length > 0 && reducedContent.length < nArgs.ppp) {
		const slots = [];
		for (let i = 0, m = nArgs.ppp - reducedContent.length; i < m; i++) {
			slots.push(nArgs.slot);
		}
		reducedContent.push(...slots);
	}

	if (Object.hasOwnProperty.call(reducedContent, '_links')) {
		delete reducedContent._links;
	}

	return reducedContent;
};

/**
 * Utility function for outputting an array of [col, row]
 * depending on the columns count and index.
 *
 * @param {number} colsCount
 * @param {number} index
 * @param {number} max
 * @returns {*}
 */
export const gridIndexer = (colsCount, index, max = 4) => {
	/** col / row */
	const _return = [];
	let rowCount = 1;
	let colCount = 1;

	for (let i = 1; i <= max; i++) {
		_return.push([colCount, rowCount]);
		if (i % colsCount === 0) {
			rowCount++;
			colCount = 1;
			continue;
		}
		colCount++;
	}

	return _return[index - 1];
};

/**
 * Block Config, generate the Content List block config
 * using overrides passed by 'block_json_tenUp/content-list' filter.
 *
 * @param name
 * @param args
 * @returns {{}}
 */
export const blockConfig = (name, args = {}) => {
	return {
		...args,
		...(window.tenUp.model?.overrides ?? {}),
	};
};

/**
 *
 * @param type
 * @returns {[]}
 */
export const taxesForType = (type) => {
	const { taxonomies } = typesTaxes.find((t) => t.name === type) ?? { taxonomies: [] };
	return taxonomies;
};

/**
 * Bind associated taxonomies to a given post type.
 *
 * @param {string} type
 * @param {Array} queryArgsTaxonomies
 *
 * @returns {*|Array}
 *
 * @since 0.0.1
 */
export const bindTax = (type, queryArgsTaxonomies = []) => {
	const _queryArgsTaxonomies = [...queryArgsTaxonomies];
	return taxesForType(type).reduce((acc, tax) => {
		const savedTax = _queryArgsTaxonomies.findIndex((t) => t.name === tax.name && t.terms);
		if (savedTax === -1) {
			acc.push({
				...tax,
				terms: [],
			});
			return acc;
		}
		acc.push({
			...tax,
			terms: _queryArgsTaxonomies[savedTax].terms,
		});
		return acc;
	}, []);
};

/**
 * Get Type object.
 *
 * @param type
 * @param field
 * @returns {*|{}}
 */
export const getTypeBy = (field = 'name', type = 'post') => {
	return typesTaxes.find((t) => type === t[field]) ?? {};
};

/**
 * Taxonomy params.
 *
 * @param taxonomies
 * @param typeObj
 * @param typeObj
 * @returns {{}|*}
 */
export const taxonomyParams = (taxonomies, typeObj) => {
	if (typeObj.taxonomies.length === 0) {
		return {};
	}
	return taxonomies.reduce((acc, tax) => {
		const exists = typeObj.taxonomies.find((t) => t.name === tax.name) ?? null;
		if (exists === null) {
			return acc;
		}
		const { rest_base } = exists;
		acc[rest_base] = tax.terms.join(',');
		return acc;
	}, {});
};

/**
 * Add blank slots where content is unavailable.
 *
 * @param itemsToShow
 * @param ids
 * @returns {*[]|*}
 */
export const getSlots = (itemsToShow, ids) => {
	if (ids.length >= postsPerPage) {
		return ids;
	}
	return [
		...ids,
		...new Array(postsPerPage - ids.length).fill({
			id: 0,
		}),
	];
};

/**
 *
 * @param p
 * @returns {*}
 */
export const cacheIndexer = (p) => {
	return p.reduce((acc, item) => {
		if (Object.hasOwnProperty.call(item, '_links')) {
			delete item._links;
		}
		acc[item.id] = item;
		return acc;
	}, {});
};

export const commaConjunction = (arr = []) => {
	if (arr.length === 0) {
		return '';
	}

	if (arr.length === 1) {
		return arr[0];
	}

	const newArr = [...arr];
	const last = newArr.pop();
	return `${newArr.join(', ')}${newArr > 1 ? ',' : ''} and ${last}`;
};

export default {
	blockConfig,
	gridIndexer,
	taxesForType,
};
