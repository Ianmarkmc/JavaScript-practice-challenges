
            // Set 2 - Challenge 2
            // Determine age category based on birth year
            const birthYear = prompt("Enter your year of birth:");
            const currentYear = new Date().getFullYear();
            const age = currentYear - Number(birthYear);

            if (age < 18) {
              console.log("You are a Minor.");
            } else if (age >= 18 && age <= 36) {
              console.log("You are a Youth.");
            } else {
              console.log("You are an Elder.");
            }