import { initUi } from './../ui';
import { getSections } from './modules/load-sections';
import { createSections } from './modules/create-sections';
initUi();

const url = 'http://here-goes-api-url';

const sections = getSections(url);
let sectionList;
sections.then((data) => {
    sectionList = data;
});
// placeholder
if(!sectionList){
    sectionList = [
        {title: 'Section One', desc: 'section one description'},
        {title: 'Section Two', desc: 'section two description'},
        {title: 'Section Three', desc: 'section three description'},
        {title: 'Section Four', desc: 'section four description'}
    ];
}
// ---
createSections(sectionList);
