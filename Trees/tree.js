import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const compressImages = (dir) => {
    const children = getChildren(dir);
    const isJpg = (fileName) => {
        const [name, type] = fileName.split('.');
        return type === 'jpg';
    };
    const newChildren = children.map((child) => {
        const name = getName(child);
        const newMeta = _.cloneDeep(getMeta(child));
        if (isFile(child)) {
            if (isJpg(name)) {
                newMeta.size = (newMeta.size / 2)
                return mkfile(name, newMeta);
            }
            return mkfile(name, newMeta);
        }
        return mkdir(name, getChildren(child), newMeta);
    });
    const newMeta = _.cloneDeep(getMeta(dir));
    const newTree = mkdir(getName(dir), newChildren, newMeta);
    return newTree;
};

export { compressImages };