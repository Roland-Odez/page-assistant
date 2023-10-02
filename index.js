const buttonExplanations = {
    'button1': 'This is the Sign In button',
    'button2': 'This is the HOME button',
    'button3': 'This is the ABOUT button',
    'button4': 'This is the CONTACT button',
    'button5': 'This is the EXPLORE button',
    'button6': 'This is the SIGN UP button'
};

const videoContainer = document.getElementById('video-container');
const explanationElm = document.getElementById('explanation');

// Add click event listeners to each button
document.getElementById('button1').addEventListener('click', () => pageAssistant('button1'));
document.getElementById('button2').addEventListener('click', () => pageAssistant('button2'));
document.getElementById('button3').addEventListener('click', () => pageAssistant('button3'));
document.getElementById('button4').addEventListener('click', () => pageAssistant('button4'));
document.getElementById('button5').addEventListener('click', () => pageAssistant('button5'));
document.getElementById('button6').addEventListener('click', () => pageAssistant('button6'));

function pageAssistant(buttonId) {
    const explanation = buttonExplanations[buttonId];

    const rect = document.getElementById(buttonId).getBoundingClientRect();

    console.log(rect);

    const buttonPosition = {
        top: rect.top,
        left: rect.left,
    };

    // Move the video container close to the clicked button
    videoContainer.style.top = `${buttonPosition.top}px`;
    videoContainer.style.left = `${buttonPosition.left}px`;

    // Show the video container by adding the "active" class
    videoContainer.classList.add('active');

    if (videoContainer.classList.contains('active')) {
        explanationElm.textContent = explanation;
    }
}