export const LabelCheck = {
    async compare(array, labels) {
        const matchArray = [];
        labels.forEach(label => {
            const description = label.description.toLowerCase();
                array.labels.forEach(foodlabel => { 
                    if (foodlabel === description) {
                        matchArray.push(label.description.toLowerCase())
                        console.log(description)
                        // console.log('match')
                    } else {
                        // console.log('no match')
                    }
                })                
        })
        return matchArray;

    }
}