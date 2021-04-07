import Client from './client.js'


const app = new Client()

/*
app.get('http://localhost:8000/users')
    .then(response =>{
        console.log(response.data)
    })

*/
/*
const data = {
    title: 'toto'
}

app.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(response =>{
        console.log(response)
    })


*/
/*
const data = {
    pseudo: 'olivier'
    }

}
app.put('http://localhost:8000/users/1',data)
    .then(response => {
        console.log(response.data)
    })
    .catch((err) =>{
        console.log(err)
})
*/

//supprimer une ressource
app.delete('http://localhost:8000/ressources/1/commentaire?comment_id=1')
    .then(response =>{
        console.log(response)
    })
    .catch((err) =>{
        console.log(err)
    })





/*
async function getUser() {
    try {
        const response = await axios.get('http://localhost:8000/users');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


getUser();
*/