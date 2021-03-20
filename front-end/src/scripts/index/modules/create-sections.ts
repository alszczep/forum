import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { fetchData } from './../../_modules/fetch-data';
import { Section } from './../../_interfaces/Section';

const url = 'https://localhost:44384/api/comments/all';

export const createSections = async () => {
    const sectionList: Section[] = await fetchData(url);
    /*const sectionList = [
            {categoryId: 1, name: 'section one description'}
    ];*/
    const mainContentElement = document.querySelector('main')!;
    mainContentElement.classList.add('mainPage');
    sectionList.forEach((element) => {
        mainContentElement.appendChild(createSection(element));
    });
};
const createSection = (section: Section): HTMLElement => {
    const sectionElement = createElement('section', ['section']);
    let elements: HTMLElement[] = [];
    elements.push((createElement('h2', ['sectionTitle'], section.name)));
    elements.push((createElement('h4', ['sectionDesc'], section.categoryId)));
    appendChildren(sectionElement, elements);
    sectionElement.addEventListener('click', sectionButtonHandler(section.categoryId));
    return sectionElement;
};
const sectionButtonHandler = (categoryId: number) => {
    return () => {
        localStorage.setItem('currentSection', categoryId.toString());
        location.assign('./section.html');
    }
};