export default function JoinScreen({ onJoin }) {
    const [name, setName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.length >= 2) {
        onJoin(name);
      }
    };
  
    return (
      <div className="join-screen">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            minLength={2}
            required
          />
          <button type="submit">Join Game</button>
        </form>
      </div>
    );
  }