chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "generateTweet") {
            const prompt = request.prompt;
            console.log("Prompt:", prompt);  // Log the prompt here

            fetch('http://localhost:3000/generate', { // Change to server URL if hosting online
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt }),
            })
            .then(response => response.json())
            .then(data => {
                console.log("Response from server:", data);  // Log the response here
                sendResponse({tweet: data.tweet});
            })
            .catch(error => {
                console.error('Error:', error);
            });

            return true;
        }
    }
);
