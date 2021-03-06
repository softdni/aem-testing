"use strict";

use([], function () {
    var rootResource = resource.getChild('root');
    var resourcePath = "";

    if (rootResource != null) {
        resourcePath = rootResource.getPath();
    } else {
        // if we don't have a "root" subnode just take the first one
        var children = resource.getChildren();
        if (children.length > 0) {
            resourcePath = children[0].getPath();
        }
    }
    return {
        cssClasses: "xf-web-container",
        resourcePath: resourcePath,
        rootResource: rootResource
    };
});
