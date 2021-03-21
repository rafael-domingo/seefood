export const LabelCheck = {
    async compare(array, labels) {
        const matchArray = [];
        labels.forEach(label => {
            const description = label.description.toLowerCase();
            array.forEach(food => {
                food.labels.forEach(foodlabel => {
                    if (foodlabel === description) {
                        matchArray.push(label)
                        // console.log('match')
                    } else {
                        // console.log('no match')
                    }
                })
                
            })
            console.log(matchArray);

        })
        return matchArray;

    }
}