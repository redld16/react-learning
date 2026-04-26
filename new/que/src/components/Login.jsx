import { useState } from 'react';
import '../App.css';

const Login = () => {
  const [input, setInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Hello Welcome to my Website</h2>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder="email" />
        </div>

        <div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className="loginBtn">
          <button type="submit">Login</button>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
