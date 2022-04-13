class RecipeList{
    recipes = [];
    constructor(){}

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

    generateRecipeTable = (recipe) => {
        const table = document.createElement('table')
        table.className = 'recipe-table'

        const header = document.createElement('tr');
        header.appendChild(this.generateTableHeader('Name'));
        header.appendChild(this.generateTableHeader('Grain Bill'));
        header.appendChild(this.generateTableHeader('Hops'));
        header.appendChild(this.generateTableHeader('Yeast'));
        header.appendChild(this.generateTableHeader('Instructions'));

        const data = document.createElement('tr');
        data.appendChild(this.generateTextDataRow(recipe.name));
        data.appendChild(this.generateListDataRow(recipe.grains))
        data.appendChild(this.generateListDataRow(recipe.hops))
        data.appendChild(this.generateTextDataRow(recipe.yeast));
        data.appendChild(this.generateTextDataRow(recipe.process));

        table.appendChild(header);
        table.appendChild(data);

        return table;

    }

    generateTableList = () =>{
        const ul = document.createElement('ul')
        this.recipes.forEach(recipe => {
            ul.appendChild(this.generateRecipeTable(recipe));
        })
        return ul;
    }

    generateRecipes = async () => {
        const response = await getRecipes();
        const div = document.getElementById('recipe-list');
        const loadingDiv = div.childNodes[0];

        if(response.length){
            this.recipes = response;
            div.replaceChild(this.generateTableList(), loadingDiv);
        } else {
            div.replaceChild(generateErrorMessage(res.msg));
        }
    }
}

const recipeList = new RecipeList();

(async () =>
{ 
    recipeList.generateRecipes();
})();