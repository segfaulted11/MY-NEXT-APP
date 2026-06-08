
const Todos = async() => {

    //Data Fetching (loading data) using async/await
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    const todos = await response.json();

    console.log(todos)//array of objects

    return (
        <div>
            
        </div>
    );
};

export default Todos;