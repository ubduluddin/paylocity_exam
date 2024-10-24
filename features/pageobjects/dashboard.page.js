const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get deleteButton () {
        return $('i.fas.fa-times');
    }

    get confirmDeleteButton (){
        return $('#deleteEmployee');
    }

    get firstEmployeeId (){
        return $('td');
    }

    async deleteFirstEmployee () {
        const firstEmployee = await this.firstEmployeeId.getText();
        await this.deleteButton.click();
        await this.confirmDeleteButton.click();
        return firstEmployee;
    }


}

module.exports = new DashboardPage();
