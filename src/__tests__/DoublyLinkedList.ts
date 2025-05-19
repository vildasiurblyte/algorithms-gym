import LinkedList from "algorithms/DoublyLinkedList";
import { test_list } from "./ListTest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
