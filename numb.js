const changeTheme = () => {
        let checkedVal = document.getElementById("checkbox").checked;

        if (checkedVal) {
          document.documentElement.setAttribute("data-theme", "light");
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
        }

        document.documentElement.classList.add("color-theme-in-transition");
        document.documentElement.setAttribute("data-theme", theme);
        window.setTimeout(function () {
          document.documentElement.classList.remove(
            "color-theme-in-transition"
          );
        }, 1000);
      };