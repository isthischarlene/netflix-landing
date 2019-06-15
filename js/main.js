const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//function to add red bottom border
function selectItem (e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from the DOM
    //when click on tab, we get the id (i.e. dynamically selecting the ids of those tabs when we click on them)
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class to the selected id
    tabContentItem.classList.add('show');
}

//function to remove bottom border when another tab is selected
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//function to remove show class from other tabs and only show content of the tab that is clicked
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//event listener for when tab is clicked, the tab have red bottom border 
tabItems.forEach(item => item.addEventListener('click', selectItem))
