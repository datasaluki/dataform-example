function surrogate_key(fields) {

    stmts = fields.map(field => `cast(${field} as string) || '|'`).join(" || ")

    return `to_hex(md5(${stmts}))`
}

module.exports = {surrogate_key}