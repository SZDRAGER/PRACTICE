import {
    mkdir,
    mkfile,
    isFile,
    getName,
    getMeta,
    getChildren,
} from "@hexlet/immutable-fs-trees";
import _ from "lodash";

// the function takes a directory (tree object) as input,
// converts the names of all files in this and all nested directories to lowercase

const downcaseFileNames = (tree) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));

    if (isFile(tree)) {
        const newName = _.toLower(name);
        return mkfile(newName, newMeta);
    }

    const children = getChildren(tree);
    const newChildren = children.map((child) => downcaseFileNames(child));
    const newTree = mkdir(name, newChildren, newMeta);
    return newTree;
};

export default downcaseFileNames;