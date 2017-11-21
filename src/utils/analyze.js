import axios from "axios";
import stringSimilarity from "string-similarity";

function getWords(issues){
    let string = ""
    let regex = /\b([A-Za-z']+){3}\b/g;
    for(let issue of issues){
        string += issue.title + " " + issue.body + " ";
    }
    return string.match(regex);
}

let getAnalyzedData = (repoName)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.github.com/repos/${repoName}/issues`)
        .then((data)=>{
            let topTenWords = getWords(data.data);
            topTenWords = getOccurrences(topTenWords);
            topTenWords = rankWordOccurrences(topTenWords);

            let mostCommonIssue = refactorTitles(data.data);
            mostCommonIssue = getTheMostCommonIssueTitle(mostCommonIssue);

            resolve({topTenWords, mostCommonIssue});
        }).catch((err)=>{
            reject(err);
        });
    });

}

function getOccurrences(words){
    let dict = {}
    for(let word of words){
        if(dict.hasOwnProperty(word))
            dict[word] += 1;
        else
            dict[word] = 1;
    }

    return dict;
}

function rankWordOccurrences(dict){
    let rank = [];
    for(let i = 0; i < 10;i++){
        let word = Object.keys(dict).reduce(function(a, b){ return dict[a] > dict[b] ? a : b });
        rank.push([word, dict[word]]);
        delete dict[word];
    }

    return rank
}

function getTheMostCommonIssueTitle(titles){
    let best = {title: "", totalRating: 0};
    for(let title of titles){
        let totalRating = sumSimilarityRatings(stringSimilarity.findBestMatch(title, titles).ratings);
        if(totalRating > best.totalRating){
            best.title = title;
            best.totalRating = totalRating;
        }
    }
    return best;
}

function sumSimilarityRatings(ratings){
    let sum = 0;
    for(let rating of ratings){
        sum += rating.rating;
    }
    return sum;
}

function refactorTitles(issues){
    let titles = [];
    for(let issue of issues){
        titles.push(issue.title);
    }

    return titles;
}

export {getAnalyzedData};
