import axios from "axios";

test("response returns 200", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `q=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{
        expect(reponse.status).toBe(200);
    });

});

test("response returns status OK", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `q=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{
        expect(reponse.statusText).toBe('OK');
    });

});

test("response returns status 422 if there is a typo", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `Sq=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{
        expect(reponse.status).toBe(422);
    });

});

test("returns a error", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `Sq=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{

    }, (err)=>{
        expect(err).toBe(Error);
    });

});
