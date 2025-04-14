const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export const sanitizeHtml = (dirty: string) => {
    return DOMPurify.sanitize(dirty);
}