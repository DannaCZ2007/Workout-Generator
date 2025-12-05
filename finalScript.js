//Workout data
const workouts = {
    muscle_gain: {
        beginner:[
            "Bodyweight Squats",
            "Knee Push-ups",
            "Light Romanian Deadlift",
            "Band Rows",
            "Hip Thrust (No weights)",
            "Shoulder Press with Bottles",
            "Basic Plank"
        ],
        intermediate:[
            "Bulgarian Split Squats",
            "Standard Push-ups",
            "Romanian Deadlift (Moderate weight)",
            "Dumbbell Row",
            "Weighted Hip Thrust",
            "Dumbbell Shoulder Press",
            "Side Plank"
        ],
        advanced:[
            "Heavy Weighted Squats",
            "Weighted/Decline Push-ups",
            "Heavy Romanian Deadlift",
            "Pull-ups",
            "Heavy Hip Thrust",
            "Barbell Military Press",
            "Dragon Flag"
        ]
    },
    weight_loss: {
        beginner:[
            "Fast Walking",
            "High-rep Squats",
            "Step-ups",
            "Low-impact Jumps",
            "Low-impact Jacks",
             "20-30s Plank"
        ],
        intermediate:[
            "Light Jogging",
            "Modified Burpees",
            "Jump Rope",
            "Fast Mountain Climbers",
            "Jump Squats",
            "HIIT 20s ON / 10s OFF"
        ],
        advanced:[
            "Sprint Intervals",
            "Full Burpees", 
            "Box Jumps",
            "Fast Jump Rope",
            "Explosive Mountain Climbers",
            "HIIT 40s ON / 20s OFF"
        ]
    },

    definition:{
        beginner:[
            "Slow-tempo Squats",
            "Reverse Lunges",
            "Knee Push-ups",
            "Band Rows", 
            "30s Planks",
            "Incline Walking"
        ],
        intermediate:[
            "Moderate-weight Squats",
            "Walking Lunges (Light Weight)",
            "Standard Push-ups",
            "Moderate-weight Rows", 
            "Mountain Climbers",
            "45-60s Planks"
        ],
        advanced:[
            "Pause Squats",
            "Weighted Lateral Lunges",
            "Plyometric Push-ups",
            "Heavy Rows",
            "HIIT 30s ON / 30s OFF",
            "Advanced Planks"
        ]
    }
};

function generateWorkout(goal) {
    const days = parseInt(document.getElementById("days").value);
    const level = document.getElementById("level").value;

    // Validate goal and level
    if (!workouts[goal] || !workouts[goal][level]) {
        document.getElementById("result-text").innerHTML = "<p>Invalid selection.</p>";
        return;
    }
    const exercises = workouts[goal][level];
    let routine = "";
    
    // Generate routines per day
    for (let i = 1; i <= days; i++) {
        routine += `<h3>Day ${i}</h3>`;
        routine += "<ul>";

        // Prevent exercise repetition per day
        let dailyExercises = [...exercises]; //Copy the array
        shuffleArray(dailyExercises);//Shuffle it
        let selected = dailyExercises.slice(0, Math.min(5, dailyExercises.length));

        selected.forEach(exercise => {
            routine += `<li>${exercise}</li>`;
        });
        routine += "</ul>";
    }

    document.getElementById("result-text").innerHTML = routine;
}
//Helper function: Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
