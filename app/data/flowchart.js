export const nodes = {

  root: {
    question: "Do you have a student problem?",
    yes: "acad",
    no: "nope",
  },
  nope: {
    answer: "Bloody hell. No problems? Get out of here, you Potato.",
    by: "- Rordon Gamsay",
  },

  acad: {
    question: "Is it academic?",
    yes: "exam",
    no: "social",
  },

  exam: {
    question: "Upcoming exam?",
    yes: "exam_when",
    no: "assign",
  },
  exam_when: {
    question: "Is it tomorrow?",
    yes: "exam_cry",
    no: "exam_fail",
  },
  exam_cry: {
    answer: "Let him cook!! I said LET HIM COOK!!... (You are so cooked)",
    by: "Advice — Better Sleep",
  },
  exam_fail: {
    question: "Have you studied at all?",
    yes: "exam_plan",
    no: "exam_yolo",
  },
  exam_plan: {
    answer: "Make a realistic schedule. Break it into 30 minute chunks. Start with the hardest topic first. Sleep by midnight.",
    by: "You're going to open Instagram instead. We know.",
  },
  exam_yolo: {
    answer: "And so the student, having done nothing for 3 months, opens the syllabus the night before. Rare. Brave. Absolutely cooked.",
    by: "- Bear Grylls probably",
  },

  assign: {
    question: "Is it an assignment?",
    yes: "assign_due",
    no: "grades",
  },
  assign_due: {
    question: "Is it due tomorrow?",
    yes: "assign_all",
    no: "assign_started",
  },
  assign_all: {
    answer: "All-nighter it is. Blame the WiFi tomorrow.",
    by: "- Coffee",
  },
  assign_started: {
    question: "Have you started it at least?",
    yes: "assign_done",
    no: "assign_soon",
  },
  assign_soon: {
    answer: "You have time! *immediately opens Netflix*",
    by: "- TARS, what are the odds of survival? — Not good, Cooper. Not good.",
  },
  assign_done: {
    question: "Did you actually complete it?",
    yes: "assign_sub",
    no: "assign_copy",
  },
  assign_sub: {
    answer: "Close all 47 tabs. It is over. You are free.",
    by: "- you forgot to put your name. you will find out tomorrow.",
  },
  assign_copy: {
    answer: "Copy. Paste. Pray. The holy trinity.",
    by: "-with great copy comes great responsibility."
  },

  grades: {
    question: "Is it your CGPA?",
    yes: "cgpa_low",
    no: "social",
  },
  cgpa_low: {
    question: "Is it below 6?",
    yes: "cgpa_cry",
    no: "cgpa_good",
  },
  cgpa_cry: {
    answer: "Tell everyone you 'don't care about CGPA'(you do)",
    by: "- the lion does not care about CGPA. the placement cell does."
  },
  cgpa_good: {
    question: "Is it above 9?",
    yes: "cgpa_nerd",
    no: "cgpa_mid",
  },
  cgpa_nerd: {
    answer: "First bench. Nodding at everything. Congratulations, nerd",
    by: "How does catching bucket feels like?"
  },
  cgpa_mid: {
    answer: "Perfectly balanced. As all things should be.",
    by: "- Thanos, snapping away your dreams of a 9 pointer."
  },

  social: {
    question: "Is it about friends or relationships?",
    yes: "friends",
    no: "crush",
  },

  friends: {
    question: "Did you have a fight?",
    yes: "fight_fault",
    no: "no_friends",
  },
  fight_fault: {
    question: "Was it your fault?",
    yes: "fight_yes",
    no: "fight_no",
  },
  fight_yes: {
    answer: "Apologise. As always. The routine never changes.",
    by: "- wait. is it a girl? oh. OH. you're on your own"
  },
  fight_no: {
    answer: "Post a vague sad quote on your story at 1AM",
    by: "- - they know it's about them. you know they know. nobody will say anything."
  },
  no_friends: {
    question: "Feeling lonely on campus?",
    yes: "main_char",
    no: "go_out",
  },
  main_char: {
    answer: "Main character era. You don't need them. *eats alone cinematically*",
    by: "- and so the villain arc begins. over lunch. alone."
  },
  go_out: {
    answer: "Go to class. Sit next to someone. Say 'bro what page'",
    by: "- and that kids, is how I met your mother."
  },

  crush: {
    question: "Is it about a crush?",
    yes: "crush_know",
    no: "money_b",
  },
  crush_know: {
    question: "Do they know you exist?",
    yes: "crush_talk",
    no: "crush_ghost",
  },
  crush_ghost: {
    answer: "You are the terms and conditions. Present. Important. Never read.",
    by: "terms and conditions applied*"
  },
  crush_talk: {
    question: "Have you spoken to them?",
    yes: "crush_spoke",
    no: "crush_do",
  },
  crush_spoke: {
    answer: "'Hey' counts. Marry them immediately",
    by: "and a restraining order on the side"
  },
  crush_do: {
    answer: "Send a meme at 2AM. Classic. Never fails. (It always fails)",
    by: "What's the difference between this meme and your confession? The meme got delivered. 🥁"
  },
  crush_heart: {
    question: "Got rejected?",
    yes: "heart_yes",
    no: "heart_no",
  },
  heart_yes: {
    answer: "Post gym selfie. Move to new city (mentally) 🏋️",
  },
  heart_no: {
    answer: "THEN WHAT ARE YOU WAITING FOR. This is not a drill 🚨",
  },

  money_b: {
    question: "Is it about money?",
    yes: "broke",
    no: "vibe",
  },
  broke: {
    question: "Are you actually broke?",
    yes: "broke_yes",
    no: "broke_no",
  },
  broke_yes: {
    question: "Like, no-Maggi broke?",
    yes: "ramen",
    no: "sell_notes",
  },
  ramen: {
    answer: "Tony Stark built a suit in a cave. With a box of scraps. *Dramatic pause*",
    by: "you have Maggi. close enough."
  },
  sell_notes: {
    answer: "Sell your notes ₹50 per subject. Entrepreneur era",
    by: "Advice — don't impulse buy that dress next time"
  },
  broke_no: {
    question: "How will you spend it? (yes - Zwiggy, No - invest)",
    yes: "zomato",
    no: "invest",
  },
  zomato: {
    answer: "Yes and you would do it again and we respect that",
    by: "*This answer is proudly sponsored by Zwiggy. Use code COOKED for 69% off."
  },
  invest: {
    answer: "Invest? You? Adorable. Here's a better idea: Zwiggy has a sale.",
    by: "*This answer is proudly sponsored by Zwiggy. Use code COOKED for 69% off."
  },

  vibe: {
    question: "Is it a burnout(yes) or stress(no) thing?",
    yes: "burnout",
    no: "anxiety",
  },
  burnout: {
    question: "Are you burned out?",
    yes: "burn_long",
    no: "burn_not",
  },
  burn_long: {
    question: "Has it been going on for over a month?",
    yes: "burn_month",
    no: "burn_week",
  },
  burn_week: {
    answer: "You're cooked. One more episode of FRIENDS won't hurt..",
    by: "*NOT SPONSORED BY NETFLIX* ...maybe"
  },
  burn_month: {
    answer: "Congratulations! It's a boy! Just kidding. It's chronic burnout.",
    by: "Nthat'll be $5000. insurance doesn't cover this. PAY UP!"
  },
  burn_not: {
    question: "Just lazy?",
    yes: "burn_lazy1",
    no: "burn_lazy2",
  },
  burn_lazy1: {
    answer: "Rest is self-care. *Sleeps for 14 hours*",
    by: "Lion doesn't concern itself with productivity"
  },
  burn_lazy2: {
    answer: "Thats what a lazy person would say.",
    by: "Sit up STRAIGHT!"
  },

  anxiety: {
    question: "Existential dread about the future?",
    yes: "anx_yes",
    no: "anx_no",
  },
  anx_yes: {
    question: "Is it placement season anxiety?",
    yes: "anx_place",
    no: "anx_life",
  },
  anx_place: {
    answer: "Don't worry about things that won't happen, like your placement",
    by: "*who told that??*"
  },
  anx_life: {
    answer: "Drop everything. Watch comfort show. Problem solved (temporarily)",
    by: "I hope you wont regret it"
  },
  anx_no: {
    question: "Just general vibes of doom?",
    yes: "anx_vibe1",
    no: "anx_vibe2",
  },
  anx_vibe1: {
    answer: "Eat 6 Star, Do nothing",
    by: "better than 5 star. (5 star did not sponsor)"
  },
  anx_vibe2: {
    answer: "Touch grass. No literally. Outside exists",
    by: "Kaha kaha se ajate ho?"
  },

  attend_b: {
    question: "Is it attendance?",
    yes: "attend_low",
    no: "att_fine",
  },
  attend_low: {
    question: "Are you below 75%?",
    yes: "att_math",
    no: "att_fine",
  },
  att_math: {
    question: "Can you mathematically recover?",
    yes: "att_calc",
    no: "att_pray",
  },
  att_pray: {
    answer: "Dear professor, I was sick.",
    by: "2% survival rate. the medical certificate would have helped. just saying. "
  },
  att_calc: {
    answer: "Attend every class for 3 months like a your life depended on it",
    by: "I hope u survive (you won't)"
  },
  att_fine: {
    question: "Above 75%?",
    yes: "att_skip",
    no: "att_bunk",
  },
  att_skip: {
    answer: "Ja Simran ja, jee le apni zindagi",
    by: "- Saarukan (had to use fake name because of copyright)"
  },
  att_bunk: {
    answer: "Go to your class, is this why your parents send you to college???",
    by: "- Your Teacher!"
  },
};