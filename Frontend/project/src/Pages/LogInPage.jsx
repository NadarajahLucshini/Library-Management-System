function LogIn() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted");
  
  };

  return (
    <div class="form">
      <div class="welcometext">
        <h1 id="A">Welcome to the Library System</h1>
        <p id="B">Log in to continue...</p>
      </div>
      <div class="loginbox">
        <h2 id="login">Log in</h2>
        <form onSubmit={handleSubmit}>

          
          <label id="label" htmlFor="username"><b>Username</b></label> 
          <input type="text" id="username" name="username" placeholder="Username" required />
        
          
          <label id="label" htmlFor="password"><b>Password</b></label>         
          <input type="password" id="password" name="password" placeholder="Password" required />

          
          
          
          

          <button id="button" type="submit">Log in</button>
          <p class="signup"><b>Don't have an account? <a href="#">Sign up now</a></b></p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
