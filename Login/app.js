console.log("hello");


function swap(){
  document.getElementById("first-page-div").innerHTML = `
  <div class="right">
        <form>
          <section class="copy">
            <h2 style="font-size: xx-large; font-weight: bold;">Log in</h2>
          </section>

          <div class="socialcontainer">
            <a href="https://www.facebook.com" class="social"><i
                class="fab fa-facebook" style="color: black;"></i></a>
            <a href="https://www.google.co.in/" class="social"><i
                class="fab fa-google" style="color: black;"></i></a>
            <a href="https://www.linkedin.com" class="social"><i
                class="fab fa-linkedin" style="color: black;"></i></a>
          </div>

          <section class="account">
            <span>or use your account</span>
          </section>

          <div class="input email">
            <label for="email">Email ID</label>
            <input id="email" name="email" type="email" placeholder="Email">
          </div>

          <div class="input password">
            <label for="Password">Password</label>
            <input id="Password" name="password" type="password"
              placeholder="type your password">
          </div>

          <section class="copy legal">
            <p><a href="#" class="small">Forget your password?</a></p>
          </section>

          <button class="signinbtn" type="submit">
            Sign In
          </button>

        </form>
      </div>
      <div class="overlay">

        <div class="both">
          <div class="overlay-left">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>   
            <button id="signin" onclick="reswap();">
              Sign In
            </button>
          </div>
        </div>
      </div>  `
};


function reswap(){
  document.getElementById("first-page-div").innerHTML = `
  <div class="overlay">
        <div class="both">
          <div class="overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button id="signin" onclick="swap();">Sign In</button>
          </div>
        </div>

      </div>
      <div class="right">
        <form>
          <section class="copy">
            <h2 style="font-size: xx-large; font-weight: bold;">
              Sign Up
            </h2>
          </section>
          <div class="socialcontainer">
            <a href="https://www.facebook.com" class="social"
              style="color: black;">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.google.co.in/" class="social"
              style="color: black;">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="https://www.linkedin.com" class="social"
              style="color: black;">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="input name">
            <label for="fname">
              Full Name
            </label>
            <input id="fname" name="fname" type="text"
              placeholder="Enter your name">
          </div>
          <div class="input email">
            <label for="email">
              Email ID
            </label>
            <input id="email" name="email" type="email" placeholder="Email">
          </div>
          <div class="input password">
            <label for="Password">
              Password
            </label>
            <input id="Password" name="password" type="password"
              placeholder="Type your password">

          </div>
          <div class="input confirm">
            <label for="Confirm">
              Confirm Password
            </label>
            <input id="Confirm" name="confirm" type="password"
              placeholder="Confirm your password">
          </div>
          <div class="input cta">
            <label for="class"></label>
          </div>
          <button class="signupbtn" type="submit" >
            Sign Up
          </button>
          <section class="copy legal">
            <p>
              <span class="small">By continuing, you agree to accept our<br>
                <a href="#">Privacy Policy</a>
                &amp;
                <a href="#">Terms of Service</a>
              </span>
            </p>
          </section>
        </form>
      </div>`
};