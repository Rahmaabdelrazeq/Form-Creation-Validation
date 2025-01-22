document.addEventListener('DOMContentLoaded', () => {
    // Call the fetchUserData function when the page loads
    fetchUserData();
});

// Async function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the container where data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create an unordered list element
        const userList = document.createElement('ul');
        
        // Loop through users and create list items
        users.forEach(user => {
            // Create new list item
            const listItem = document.createElement('li');
            
            // Set the text content to user's name
            listItem.textContent = user.name;
            
            // Append the list item to the user list
            userList.appendChild(listItem);
        });
        
        // Append the completed list to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Clear the container and display error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}
