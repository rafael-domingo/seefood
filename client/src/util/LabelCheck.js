export const LabelCheck = {
    async compare(array, labels) {
        var matchArray;
        labels.forEach(label => {
            const description = label.description.toLowerCase();
                array.labels.forEach(foodlabel => { 
                    if (foodlabel === description) {
                        console.log(`description: ${label.description}, score: ${label.score}`);

                        // Compare which label has a higher score
                        if (!matchArray) {
                            matchArray = label;
                        } else if (matchArray) {
                            if (label.score > matchArray.score) {
                                matchArray = label;
                            }
                        }
                    } 
                })
        })

        // Check if match is empty
        if (matchArray) {
            return matchArray.description;
        } else {
            return []
        }
        

    }
}