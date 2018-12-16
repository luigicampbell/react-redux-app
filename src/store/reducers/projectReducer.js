const initState = {
    projects: [
        {id:'1', title: 'Pick a Venue', content: 'Venues Explored: The Inn of the Seventh Ray'},        
        {id:'2', title: 'Choose a Cake', content: 'Cakes we Like: Naked Cake with Flowers on Top'},       
        {id:'3', title: 'Pick Music', content: 'Big Sean\'s: I don\'t Give a Fuck'}        
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project);
    }
    return state;
};

export default projectReducer;
