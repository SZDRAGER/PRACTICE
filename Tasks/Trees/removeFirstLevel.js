const removeFirstLevel = (tree) => {
    const nodes = tree
        .filter(Array.isArray)
        .flatMap((e) => e);
    return nodes;
};

export default removeFirstLevel;