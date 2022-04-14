const createLabeledInput = (target, title, inputType, value) => {
    const div = document.createElement('div');
    const label = document.createElement('label');

    label.setAttribute('for', target);
    label.innerText = title;

    const input = document.createElement(inputType);
    input.id = target;
    input.value = value;

    div.appendChild(label);
    div.appendChild(input);

    return div;
}

const createActionButtons = () =>{
    const div = document.createElement('div');

    const saveButton = document.createElement('button');
    saveButton.innerText = "Save Recipe";
    saveButton.onclick = ((e) => {handleSave(e)});

    const cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.onclick = ((e) => {handleCancel(e)})

    div.appendChild(saveButton);
    div.appendChild(cancelButton);

    return div;
}

const createListInput = (label, inputList, id) => {
    const rowDiv = document.createElement('div');
    rowDiv.className='input-list-row-wrapper';

    const labelElement = document.createElement('p');
    labelElement.appendChild(document.createTextNode(label));

    const div = document.createElement('div');
    div.className = 'input-list-wrapper';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'input-list';
    innerDiv.id = id;

    inputList 
        ? inputList.forEach((e) => 
            {
                const input = document.createElement('input');
                input.value = e;
                innerDiv.appendChild(input);
            }) 
        : innerDiv.appendChild(document.createElement('input'));

    const addButton = document.createElement('button');
    addButton.onclick = (e => {
        e.preventDefault();
        const newInput = document.createElement('input');
        innerDiv.appendChild(newInput);
    })
    addButton.innerText = 'Add Item';
    div.append(innerDiv);
    div.appendChild(addButton);

    rowDiv.appendChild(labelElement);
    rowDiv.appendChild(div);

    return rowDiv;
}

const buildPopUpDialog = (recipe) =>
{
    const wrapper = document.createElement('div');
    wrapper.className = 'popup-form-wrapper';
    const form = document.createElement('form');

    form.appendChild(createLabeledInput('recipe-name', 'Recipe Name', 'input', recipe?.name ?? ''));
    form.appendChild(createListInput("Grains", recipe?.grains, "recipe-grains"));
    form.appendChild(createListInput("Hops", recipe?.hops, "recipe-hops"));

    form.appendChild(createLabeledInput('recipe-yeast', 'Yeast', 'input', recipe?.yeast ?? ''));

    form.appendChild(createLabeledInput('recipe-process', 'Instructions', 'textarea', recipe?.process ?? ''));

    form.appendChild(createActionButtons());

    wrapper.appendChild(form);

    let popUpBox = document.getElementById('popUpBox');
    popUpBox.style.display = "flex";

    popUpBox.replaceChild(wrapper, document.getElementById('box'));
}

const resetPopupBox = () => {
    while(popUpBox.lastChild){
        popUpBox.removeChild(popUpBox.lastChild);
    }

    const box = document.createElement('div');
    box.id='box';

    const loadingElement = document.createElement('p');
    loadingElement.innerText = 'loading...';
    box.appendChild(loadingElement);
    popUpBox.appendChild(box)
}

const handleCancel = (e)=> {
    e.preventDefault();
    let popUpBox = document.getElementById('popUpBox');
    popUpBox.style.display = 'none';
    resetPopupBox();
}

const handleSave = (e) => {
    e.preventDefault();


    const recipeName = document.getElementById('recipe-name');
    const recipeGrains = document.getElementById('recipe-grains');
    const recipeHops = document.getElementById('recipe-hops');
    const recipeYeast = document.getElementById('recipe-yeast');
    const recipeInstructions = document.getElementById('recipe-process');
    const allGrains = [];
    const allHops = [];

    // Need to iterate over grains and hops
    [...recipeGrains.children].forEach(child => allGrains.push(child.value));
    [...recipeHops.children].forEach(child => allHops.push(child.value));

    addRecipe({
        name: recipeName,
        grains: allGrains,
        hops: allHops,
        yeast: recipeYeast,
        process: recipeInstructions
    });

    handleCancel();
}