document.getElementById('generateButton').addEventListener('click', () => {
    let prompt = document.getElementById('prompt').value;

    // Send a message to the background script to generate a tweet
    chrome.runtime.sendMessage({action: 'generateTweet', prompt: prompt}, response => {
        // Display the generated tweet in the tweet card
        document.getElementById('tweetText').textContent = response.tweet;

        // Save the generated tweet to local storage
        let tweets = JSON.parse(localStorage.getItem('tweets'));
        if (!tweets) {
            tweets = [];
        }
        tweets.push(response.tweet);
        localStorage.setItem('tweets', JSON.stringify(tweets));
    });
});

document.getElementById('viewHistoryButton').addEventListener('click', () => {
    // Hide the tweet generator and show the tweet history
    document.getElementById('tweetGenerator').style.display = 'none';
    document.getElementById('tweetHistory').style.display = 'block';

    // Get the stored tweets from local storage
    let tweets = JSON.parse(localStorage.getItem('tweets'));

    // If there are no stored tweets, set tweets to an empty array
    if (!tweets) {
        tweets = [];
    }

    // Get the tweets div
    let tweetsDiv = document.getElementById('tweets');

    // Create a card for each tweet and add it to the tweets div
    tweets.forEach((tweet, index) => {
        let card = document.createElement('div');
        card.style.border = '1px solid #1DA1F2';
        card.style.background = 'white';
        card.style. color = 'black';
        card.style.fontSize = '18px';
        card.style.borderRadius = '10px';
        card.style.marginBottom = '10px';
        card.style.padding = '10px';

        let p = document.createElement('p');
        p.textContent = tweet;
        card.appendChild(p);

        let copyButton = document.createElement('button');
        copyButton.textContent = 'Copy Tweet';
        copyButton.style.marginTop = '10px';
        copyButton.style.width = '100%';
        copyButton.style.padding = '10px';
        copyButton.style.background = 'whitesmoke';
        copyButton.style.borderStyle = 'none';
        copyButton.style.borderRadius = '10px';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(tweet)
                .then(() => {
                    alert('Tweet copied to clipboard!');
                })
                .catch((err) => {
                    console.error('Failed to copy tweet: ', err);
                });
        });
        card.appendChild(copyButton);

        tweetsDiv.appendChild(card);
    });
});


document.getElementById('backButton').addEventListener('click', () => {
    // Hide the tweet history and show the tweet generator
    document.getElementById('tweetHistory').style.display = 'none';
    document.getElementById('tweetGenerator').style.display = 'block';
});

document.getElementById('copyButton').addEventListener('click', () => {
    let tweetText = document.getElementById('tweetText').textContent;
    navigator.clipboard.writeText(tweetText);
});
