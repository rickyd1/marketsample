function addItem() {
    var listitems = Alloy.Collections.shoplist;

    // Create a new model for the todo collection
    var listitem = Alloy.createModel('Shoplist', {
        item : $.itemField.value,
        done : 0
    });

    // add new model to the global collection
    listitems.add(listitem);

    // save the model to persistent storage
    listitem.save();

    // reload the item
    listitems.fetch();

    closeWindow();
}
function focusTextField() {
    $.itemField.focus();
}
function closeKeyboard(e) {
    e.source.blur();
}
function closeWindow() {
    $.addWin.close();
}