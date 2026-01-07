/*
 * Create all the sources uses the javascript declare function as it's less code and easy to maintain
 */

const tables = ["customer", "order", "order_item", "product", "category", "sub_category", "courier", "shipping_method"]

tables.forEach(tbl => declare({
    schema: dataform.projectConfig.vars.sourceSchema,
    name: tbl
}));
