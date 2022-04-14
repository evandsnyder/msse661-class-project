class RecipeBrowser {
    recipes = [];
    recipeService;

    constructor(recipeService){
        this.recipeService = recipeService;
    }

    init() {
        this.render();
    }

    generateErrorMessage = (msg) => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(msg));
        div.id = 'err-msg';
        div.className='center';
        return div;
    };

    generateTableHeader = (name) => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(name));
        return th;
    }

    generateTextDataRow = (data) => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(data));
        return td;
    }

    generateListDataRow = (data) => {
        const td = document.createElement('td');
        const ul = document.createElement('ul')
        data.forEach(element => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });

        td.appendChild(ul);

        return td;
    }

    generateActionButtons = (recipe) => {
        const div = document.createElement('div');

        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.className='delete-btn';

        const editButton = document.createElement('button');
        editButton.appendChild(document.createTextNode('Edit'));
        editButton.onclick = () => {
            // Create the popupbox...
            buildPopUpDialog(recipe);
        };

        div.appendChild(editButton);
        div.appendChild(deleteButton);

        return div;
    }

    generateRecipeTable = (recipe) => {
        const table = document.createElement('table')
        table.className = 'recipe-table'

        const header = document.createElement('tr');
        header.appendChild(this.generateTableHeader('Name'));
        header.appendChild(this.generateTableHeader('Grain Bill'));
        header.appendChild(this.generateTableHeader('Hops'));
        header.appendChild(this.generateTableHeader('Yeast'));
        header.appendChild(this.generateTableHeader('Instructions'));
        header.appendChild(this.generateTableHeader('Actions'));

        const data = document.createElement('tr');
        data.appendChild(this.generateTextDataRow(recipe.name));
        data.appendChild(this.generateListDataRow(recipe.grains))
        data.appendChild(this.generateListDataRow(recipe.hops))
        data.appendChild(this.generateTextDataRow(recipe.yeast));
        data.appendChild(this.generateTextDataRow(recipe.process));
        data.appendChild(this.generateActionButtons(recipe));

        table.appendChild(header);
        table.appendChild(data);

        return table;

    }

    generateTableList = () =>{
        const ul = document.createElement('ul')
        ul.className = 'recipe-list';
        this.recipes.forEach(recipe => {
            ul.appendChild(this.generateRecipeTable(recipe));
        })
        return ul;
    }

    generateRecipes = async () => {
        const response = await getRecipes();
        const div = document.getElementById('recipe-list-container');
        const loadingDiv = div.childNodes[1];

        if(response.length){
            this.recipes = response;
            div.replaceChild(this.generateTableList(), loadingDiv);
        } else {
            div.replaceChild(generateErrorMessage(res.msg));
        }
    }

    render = async () =>{e
        const recipes = await this.recipeService.getRecipes();
        try {
            if(recipes.length){
                this.recipes = recipes;
                this.generateRecipes();
            } else {
                this._renderMsg();
            }
        } catch(err){
            alert(`Error: ${err.message}`);
        }
    }
}