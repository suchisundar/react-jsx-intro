const MAX_NAME_LENGTH_TO_SHOW = 6;

/** Info on a single person.
 *
 * Props:
 * - name
 * - age
 * - hobbies: array, like ["cats", "bridge", "fighting the patriarchy"]
 */

function Person({ age, hobbies, name }) {
  const voteText = age >= 18
      ? "Please go vote!"
      : "You must be 18";

  // your browser will issue a stern warning about this; we'll learn how to fix
  // that later.
  const hobbiesLIs = hobbies.map(hobby => <li key={hobby}>{hobby}</li>);

  // Determine the name to display based on its length
  const displayedName = name.length > 8 ? name.slice(0, MAX_NAME_LENGTH_TO_SHOW) : name;

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {displayedName}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesLIs}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}

