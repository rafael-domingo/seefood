export const VisionAPI = {
    search(image) {
        console.log('search');
        console.log(image);
        return fetch(`http://localhost:5000/api`, {
            method: 'POST',
            body: {
                "result": image.result
            }
        });
    }
}