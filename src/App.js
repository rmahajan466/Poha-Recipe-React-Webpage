import React from 'react';
import './App.css';

// Header Component
function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to My Simple React App</h1>
    </header>
  );
}

// Main Content Component with Poha Recipe
function MainContent() {
  return (
    <main>
      <h2>Poha Recipe</h2>
      <p>Poha is a light and delicious Indian breakfast dish made from flattened rice. Here's how you can make it:</p>
      <h3>Ingredients:</h3>
      <ul>
        <li>2 cups Poha (flattened rice)</li>
        <li>1 medium onion, finely chopped</li>
        <li>1 medium potato, finely chopped</li>
        <li>2 green chilies, finely chopped</li>
        <li>1/4 cup peanuts</li>
        <li>1/2 teaspoon mustard seeds</li>
        <li>8-10 curry leaves</li>
        <li>1/4 teaspoon turmeric powder</li>
        <li>Salt to taste</li>
        <li>1 tablespoon oil</li>
        <li>Fresh coriander leaves, chopped</li>
        <li>1 tablespoon lemon juice</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Rinse the poha in water until it becomes soft. Drain and set aside.</li>
        <li>Heat oil in a pan. Add mustard seeds and let them crackle.</li>
        <li>Add curry leaves and green chilies. Sauté for a few seconds.</li>
        <li>Add peanuts and fry until they become golden brown.</li>
        <li>Add chopped onions and sauté until they turn translucent.</li>
        <li>Add potatoes and cook until they are tender.</li>
        <li>Add turmeric powder and salt. Mix well.</li>
        <li>Add the rinsed poha and mix gently. Cook for 2-3 minutes on low heat.</li>
        <li>Turn off the heat. Add lemon juice and mix well.</li>
        <li>Garnish with fresh coriander leaves and serve hot.</li>
      </ol>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Raghav Mahajan. All rights reserved.</p>
      <p>
        Follow us on <a href="https://www.linkedin.com/in/raghav-mahajan-jsk777/">LinkedIn</a> | Contact us: <a href="mailto:raghavmahajan965@gmail.com">raghavmahajan965@gmail.com</a>
      </p>
    </footer>
  );
}

// App Component
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
