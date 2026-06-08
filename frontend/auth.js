// REGISTER

const registerForm =
  document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      const name =
        document.getElementById("name").value;

      const email =
        document.getElementById("email").value;

      const password =
        document.getElementById("password").value;

      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      alert(data.message);

      // User ah login panna maari save pannudhu
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      window.location.href =
        "landing.html";
    }
  );
}

// LOGIN

const loginForm =
  document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();

      const email =
        document.getElementById("email").value;

      const password =
        document.getElementById("password").value;

      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (
        data.message ===
        "Login Successful"
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        window.location.href =
          "landing.html";
      } else {
        alert("Invalid Credentials");
      }
    }
  );
}