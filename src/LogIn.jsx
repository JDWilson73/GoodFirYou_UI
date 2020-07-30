import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h1>~Sign Up and Plant Your First Tree~</h1>

      <div>

        <form>
          <div class = "form-group">
            <label for="fname">First Name: </label>
            <input type="text" id="fname" name="fname" class="form-control"/> <br />
            <label for="lname">Last Name: </label>
            <input type="text" id="lname" name="lname" class="form-control"/> <br />
          </div>

          <div class = "form-group">
            <label for="email">Email Address: </label> <br />
            <input type="text" id="email" name="email" class="form-control"/> <br />
          </div>

          <div class = "form-group">
            <label for="password">Password: </label> <br />
            <input type="password" id="password" name="password" class="form-control"/>
            <small id="pwd_info" class="form-text text-muted">Password must be dank.</small> <br /> <br />
            <label for="cfm_password">Confirm Password: </label> <br />
            <input type="password" id="cfm_password" name="cfm_password" class="form-control"/> <br />
          </div>

            <div class = "container">
              <div class = "row">
                <label for="prompt checkboxes">Which of these are you interested in setting goals for?</label> <br />

                <div class = "col-sm-2">
                  <label for="exercise">Exercise</label>
                  <input type="checkbox" />
                </div>

                <div class = "col-sm-2">
                  <label for="academics">Academics</label>
                  <input type="checkbox" />
                </div>

                <div class = "col-sm-2">
                  <label for="language">Language</label>
                  <input type="checkbox" />
                </div>

                <div class = "col-sm-2">
                  <label for="coding">Coding</label>
                  <input type="checkbox" />
                </div>
              </div>
              <br />
            </div>

          <button type = "submit" class = "btn btn-primary">Submit</button>


        </form>

      </div>
    </div>
  )
}
