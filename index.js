document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById('search-btn');
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector(".stats-container")
    const easyProgressCircle = document.querySelector('.easy-progress')
    const mediumProgressCircle = document.querySelector('.medium-progress')
    const hardProgressCircle = document.querySelector('.hard-progress')
    const easyLabel = document.getElementById('easy-label')
    const mediumLabel = document.getElementById('medium-label')
    const hardLabel = document.getElementById('hard-label')
    const cardStatsContainer = document.querySelector('.stats-cards');

    //return true or false based on a regex

    function validateUsername(username) {
        if (username.trim() === '') {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,25}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert('Invalid Username');
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`
        
        try {
            searchButton.textContent = 'Searching...'
            searchButton.disabled = true;
            const response = await fetch(url);

            const data = await response.json();
            if (data.status ==='error') {
                throw new Error('Unable to fetch the user details');
            }
            console.log("Logging data:", data)
            await displayUserData(data);
        }
        catch (error) {
            console.error('Error:', error.message);
            statsContainer.innerHTML = `<p>No data Found!<p>
            <br><p>Please! enter the valid username</p> `

            setTimeout(() => {
                location.reload();
            }, 1500);
        }
        finally {
            searchButton.textContent = 'Search'
            searchButton.disabled = false;
            
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;

        circle.style.setProperty("--progress-degree",`${progressDegree}%`)
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(data)
    {
        const totalHardQues = data.totalHard;
        // console.log('total Hard Ques:',totalHardQues)
        const totalEasyQues = data.totalEasy;
        const totalMediumQues = data.totalMedium;

        const solvedTotalQues = data.totalSolved;

        const easySolved = data.easySolved;
        const mediumSolved = data.mediumSolved;
        const hardSolved = data.hardSolved;

        updateProgress(easySolved, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(mediumSolved, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(hardSolved, totalHardQues, hardLabel,hardProgressCircle);


    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("logging username:", username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    })

})