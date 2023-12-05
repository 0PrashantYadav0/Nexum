// Login.js

const Login = () => {

  return (
    <div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control" id="staticEmail" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <a className='btn btn-primary' href='/home'>Login </a>
    </div>
  );
};

export default Login;
