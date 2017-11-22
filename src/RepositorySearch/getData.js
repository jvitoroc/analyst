import axios from "axios";

export default function getRepositories(query, amount){
    return new Promise((resolve, reject)=>{
        let url = `https://api.github.com/search/repositories?` +
                    `q=${query}&` +
                    `per_page=${amount}&` +
                    `client_id=085153c53d393d9f0d9c`;

        axios.get(url)
        .then((response)=>{
            resolve(extractRequired(response.data.items));
        })
        .catch((err)=>{
            reject(err);
        });
    });
}

function extractRequired(repos){
    let items = [];
    for(let repo of repos){
        items.push({
            name: repo.full_name,
            avatarUrl: repo.owner.avatar_url,
            issuesCount: repo.open_issues,
            starsCount: repo.stargazers_count
        });
    }
    return items;
}
