export function sayHello() {
    return "hello!"
}
/**
 * Process a list of ballots, and return all candidates sorted in descending order by their total number of points.
List<String> getResults(List<Ballot> ballots)
A ballot: A, B, C
A -> 3, B -> 2, C -> 1


represent a ballot (up to 3 votes in order)
map where the key is name and value is count

iterate ballots -> iterate votes

at least one vote at most 3 votes

 */ 

export interface Ballot {
    votes: string[]
}

export function getResults(ballots: Ballot[]): string[] {
    const resultMap = new Map<string, number>();
    let candidate = '';

    for (let i = 0; i < ballots.length; i++) {
        for (let j = 0; j < 3; j++) {
            candidate = ballots[i].votes[j];
            if(!candidate) {
                continue;
            }
            console.log(candidate);
            if (resultMap.has(candidate)) {
                resultMap.set(candidate, resultMap.get(candidate)! + 3 - j);
            } else {
                resultMap.set(candidate, 3 - j);
            }
        }
    }

    const result = [...resultMap.entries()].sort((a, b) => b[1] - a[1]);
    const values = new Array<string>();

    for (let [key, _] of result) {
        values.push(key);
    }

    return values; 
}