"use strict";

class OrderHistory {

    constructor() {
        this.accountOrderListTable = "table#order-list";
        this.accountOrdersLis = this.accountOrderListTable + " > tbody > tr";
    }

    getAccountOrderListTable(){
        return cy.get(this.accountOrderListTable);
    }

    getAccountOrdersLis(){
        return cy.get(this.accountOrdersLis);
    }
}

module.exports = OrderHistory;