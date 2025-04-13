function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case is when we are at a node that does not exist
    if (!curr) return path;

    // recurse steps

    // pre
    path.push(curr.value);
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
