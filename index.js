var fs = require('fs');
var path = require('path');

module.exports = function(filePath) {
    if (!filePath) {
        filePath = '';
    }

    filePath = filePath.replace(/^\.\//g, function() {
        return '';
    });

    var fullPath = path.join(require.main.filename, '..', filePath);

    if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.js')) {
        throw new Error('Could not "undot" as the requested module at ' + fullPath + ' does not exist');
    }

    return require.main.require('./' + filePath);
};
