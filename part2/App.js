function App() {
  return (
    <div>
      <Tweet
        name="Miss Piggy"
        username="misspiggy"
        date={new Date().toDateString()}
        message="I am a star"
      />
      <Tweet
        name="Kermit"
        username="thefrog"
        date={new Date().toDateString()}
        message="cermet"
      />
      <Tweet
        name="Oscar"
        username="TheGrouch"
        date={new Date().toDateString()}
        message="That's a big word for Elmo"
      />
    </div>
  );
}
