import ArrayList from "algorithms/ArrayList";
import { test_list } from "./ListTest";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});
