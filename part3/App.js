function App() {
  return (
    <div>
      <Person
        name="Mis Piggy"
        age={25}
        hobbies={["manicures", "pedicures", "being a star"]}
      />
      <Person name="Kermit" age={30} hobbies={["singing", "rrribbit"]} />
      <Person
        name="Peach"
        age={8}
        hobbies={["snaccing", "attaccing"]}
      />
      <Person
        name="Elmo"
        age={10}
        hobbies={["drawing", "exploring", "feeding my goldfish"]}
      />
    </div>
  );
}
