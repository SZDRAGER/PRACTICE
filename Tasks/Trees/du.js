import {
  mkdir,
  mkfile,
  isFile,
  isDirectory,
  getChildren,
  getName,
  getMeta,
} from "@hexlet/immutable-fs-trees";
import _ from "lodash";

// the function takes a directory as input and returns a list of directories
// and files in the specified directory one level deeper, as well as the space they occupy

const calculatefilesSize = (tree) => {
  if (isFile(tree)) {
    const meta = getMeta(tree);
    return meta.size;
  }

  const children = getChildren(tree);
  const sizes = children.map(calculatefilesSize);
  return _.sum(sizes);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), calculatefilesSize(child)]);
  // Destructuring
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

export default du;