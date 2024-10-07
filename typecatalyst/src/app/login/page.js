"use client"
import {useState } from "react";
import { useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import Link from 'next/link'



const Login = () => {
  const [username, setUsername] = useState(''); // Change email to username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await signIn('credentials', {
              username, // Pass username instead of email
              password,
              redirect: false,
          });

          console.log(res);

          if (res.error) {
              setError("INVALID CREDENTIALS");
              console.log("Login failed:", res.error);
          } else {
              router.replace("/home");
          }
      } catch (error) {
          console.log("An error occurred:", error);
      }
  };

  return (
      <div>
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
              <label>Username:</label> {/* Change Email to Username */}
              <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" required />
              <label>Password:</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" required />
              <button type="submit">LOGIN</button>
              {error && <p>{error}</p>}
              <Link href='/signup'>don't Have An Account?signup</Link>
          </form>
      </div>
  )
}

export default Login;
