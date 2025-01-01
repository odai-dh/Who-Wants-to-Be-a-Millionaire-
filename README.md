
# **Who Wants to Be a Millionaire?**

This project is a web-based quiz game inspired by the popular TV show *Who Wants to Be a Millionaire?*. 
The game presents multiple-choice questions to the player, who must select the correct answer to progress and earn virtual money.

---

## **Features**

- **Splash Screen**: The game starts with an interactive splash screen containing a "Start The Game" button.
- **Responsive Design**: The game is designed to adapt seamlessly to various screen sizes, including phones, tablets, and desktops.
- **Multiple-Choice Questions**: Players are presented with a series of multiple-choice questions.
- **Score Tracking**: Players' scores are displayed and updated dynamically based on their performance.
- **Restart Functionality**: Players can restart the quiz at any time.
- **Question Randomization**: Questions and answers are shuffled to ensure a unique experience each time.

---

## **Technologies Used**

- **HTML**: Provides the structure of the web application.
- **CSS**: Adds styling and responsive design.
- **JavaScript**: Implements game logic, interactivity, and API integration.
- **Open Trivia Database API**: Fetches trivia questions dynamically from [Open Trivia Database](https://opentdb.com/api_config.php).

---

## **Getting Started**

## **How to Play**

1. Click the **Start The Game** button on the splash screen.
2. Read the question displayed on the screen and select one of the four answers.
3. Your score increases if the answer is correct. If incorrect, the correct answer is highlighted, and the game ends.
4. Click the **Restart Quiz** button to start over.

---

## **Improvements**

Here are some potential improvements to enhance the gameplay experience:

### **1. Final Answer Confirmation**
- Add functionality where the player selects an answer and receives a confirmation dialog asking:
  - "Is this your final answer?"
- If the player confirms, the game will proceed; otherwise, they can change their selection.

### **2. Money-Based Scoring System**
- Implement a money-based reward system similar to the actual game:
  - Players progress through a series of increasing money amounts for each correct answer.
  - Include milestones (e.g., $1,000 and $32,000) that act as guaranteed rewards even if the player loses.

### **3. Help Buttons**
- Add lifelines like:
  - **50:50**: Removes two incorrect answers, leaving one incorrect answer and the correct one.
  - **Call a Friend**: Simulate a random "friend" who gives their opinion on the correct answer.
  - **Ask the Audience**: Simulate audience polling where percentages are displayed for each answer option.

### **4. Timer-Based Challenge**
- Introduce a timer for each question:
  - Players must answer within a set time limit, or the game moves to the next question (or ends).
  - Display a countdown timer with a progress bar.

### **5. Enhanced Visuals**
- Add animations for:
  - Button selection and confirmation.
  - Money progression milestones.
  - Transitions between questions.
- Use sound effects for:
  - Correct and incorrect answers.
  - Timer running out.
  - Milestone achievements.

---