let currentId = 1;

            const makeRequest =()=>{
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response)=>{
                    if (response.status == 200) {
                        response = response.json()
                        return response
                    }
                    throw new Error('Niepoprawny response')
                })
                .then((posts)=>{
                    const filterPosts = (arr) => arr.filter((posts) => posts.id == currentId)
                    filteredPosts = filterPosts(posts)[0]
                    console.log(filteredPosts)
                    return filteredPosts
                })
                .then((post)=>{
                    document.getElementById("id").innerHTML = post['id'];
                    document.getElementById("title").innerHTML = post['title'];
                    document.getElementById("body").innerHTML = post['body'];
                })
                .catch((error)=>{
                    console.log('Złapany error: ' + error);
                });
            };
            const next =()=>{
                if(currentId < 101) {
                    makeRequest();
                    currentId++;
                } 
            }
            const previous = () => {
                if(currentId > 0) {
                    makeRequest();
                    currentId--;
                }
            }