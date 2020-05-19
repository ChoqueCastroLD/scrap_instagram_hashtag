const instagram = require('./util/instagram');

let _defaults = {
    // URL
    URL_INSTAGRAM_EXPLORE_TAGS: 'https://www.instagram.com/explore/tags/',
    URL_INSTAGRAM_MEDIA_SHORTCODE: 'https://www.instagram.com/p/',
    // VARIABLES
    INSTAGRAM_DEFAULT_HASHTAG: 'landscape',
    INSTAGRAM_DEFAULT_FIRST: 10
}

function hashtag(hashtag = '', options = { limit: 10, recent: true, defaults: _defaults }) {
    const limit = options.limit ? options.limit : 10;
    const recent = !!options.recent ? true : false;

    return instagram(hashtag, limit, recent, { ..._defaults, ...options.defaults });
}

module.exports = {
    hashtag
};