
# LeetMetric App

A web application to track and visualize user progress on LeetCode. This tool provides insights into the number of solved problems categorized by difficulty level, along with a user-friendly interface to display the data.
#Screenshot
![image](https://github.com/user-attachments/assets/2c737c3e-e04f-4cee-8111-24042a33dd82)
## Features

- **Username Validation**: Ensures valid input before fetching data.
- **Progress Visualization**: Displays progress for Easy, Medium, and Hard categories using progress bars.
- **Dynamic Updates**: Updates data in real-time with smooth error handling.
- **Responsive Design**: Works seamlessly across devices.

## Screenshots

*Include screenshots or GIFs here to showcase your project.*

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.).
- Basic knowledge of JavaScript and HTML.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek-Sharma-069/leetmetric-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd leetmetric-app
   ```
3. Open `index.html` in your browser to view the project.

## Usage

1. Enter your LeetCode username in the input field.
2. Click the **"Search"** button to fetch and display your stats.
3. View your progress categorized by difficulty:  
   - **Easy**: Displays progress for easy problems.  
   - **Medium**: Displays progress for medium problems.  
   - **Hard**: Displays progress for hard problems.

## Code Structure

- `index.html`: Main HTML structure.
- `style.css`: Styling for the application.
- `script.js`: JavaScript functionality, including API calls and DOM manipulation.

## API

This project uses the following API to fetch data:

- **LeetCode Stats API**  
  URL: `https://leetcode-stats-api.herokuapp.com/{username}`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
