const nodes = {
  start: {
    type: "cover",
    
    title: "Need time off?",
    
    subtitle: 'A choose-your-own-adventure "zine" for navigating what kind of leave you can take as a Coalition of Graduate Employees (CGE) member, GTA, or GRA at Oregon State University.',

    disclaimer: `
      This guide is for general information and is not a substitute for the Collective Bargaining Agreement (CBA), OSU policies, or advice from CGE.
    `,

    options: [
      {
        text: "Find out more →",
        next: "reason"
      }
    ]
  },


  reason: {
    label: "START HERE",
    title: "Reason for leave?",
    subtitle: "Your options vary based on why you need time away from your work.",
    note: {
      label: "GOOD TO KNOW",
      text: "You may have more than one option. These aren't necessarily either/or."
    },

    body: `
      <p>
        Note: 
        <a
          href="https://www.cge6069.org/members/cba/#A30"
          target="_blank"
          rel="noopener noreferrer"
        >
          health-related leave
        </a>
        can include more than being physically sick. Under the CBA, sick leave
        may apply to physical or mental illness, injury, or health conditions;
        medical diagnosis, care, or treatment; and preventative care.
      </p>
  
      <p>
        Some health-related leave can also be used to care for a
        <a
          href="https://www.cge6069.org/members/cba/#A30:~:text=Definition%20of%20Family%20Member"
          target="_blank"
          rel="noopener noreferrer"
        >
          qualifying family member
        </a>.
      </p>

      <p>
  
      </p>
      <p>
        What kind of leave are you looking for?
      </p>
    `,
  
    options: [
      {
        text: "Health",
        description: "I for a family member need care",
        next: "health"
      },
      {
        text: "Other",
        description: "For non-health-related reasons.",
        next: "other"
      }
    ]
  },


  health: {
    label: "HEALTH-RELATED OPTIONS",
    title: "How much time do you need?",
    subtitle: "You have several options for health-related leave. Your options vary based on how much time you need to take off and how formally you want to request time off.",

    options: [
      {
        text: "Hours to days",
        description: "Shorter-term leave options.",
        next: "health-short"
      },
      {
        text: "Weeks to months",
        description: "Longer-term leave options.",
        next: "health-long"
      }
    ]
  },


  other: {
    label: "OTHER TIME OFF OPTIONS",
    title: "How much time do you need?",
    subtitle: "Your options will depend on how much time you need and how formally you want to request this time off.",

    options: [
      {
        text: "15 days or fewer",
        description: "This is generally a more informal option.",
        next: "other-short"
      },
      {
        text: "More than 15 days",
        description: "This could require a more official request.",
        next: "other-long"
      }
    ]
  },


  "health-short": {
    label: "YOUR OPTIONS",
    title: "Health-related leave",
    subtitle: "If you just need a few hours or days off, both of these options should not affect your pay.",

    options: [
      {
        text: "Flex time",
        description: "The less official option.",
        next: "flex-time"
      },
      {
        text: "Sick hours",
        description: "Time off recorded through your timesheet.",
        next: "sick-hours"
      }
    ]
  },


  "health-long": {
    label: "LONGER-TERM OPTIONS",
    title: "What brings you here?",
    subtitle: "There are several kinds of leave that may apply to longer absences. Your options can overlap, so start with the situation that best describes what you need.",
    options: [
      {
        text: "My own health",
        description: "I need time away because of my own health.",
        next: "own-health"
      },
      {
        text: "Family or caregiving",
        description: "I need to care for a family member.",
        next: "family-care"
      },
      {
        text: "Parental leave",
        description: "Birth, adoption, or fostering.",
        next: "parental"
      },
      {
        text: "Pregnancy",
        description: "Pregnancy-related leave.",
        next: "pregnancy"
      },
      {
        text: "Bereavement",
        description: "Time off after a family member's death.",
        next: "bereavement"
      },
      {
        text: "Safety",
        description: "Domestic violence, sexual assault, harassment, stalking, or related situations.",
        next: "safety"
      },
      {
        text: "I'm not sure",
        description: "I don't know what category I fall into.",
        next: "not-sure"
      }
    ]
  },


  "other-short": {
    label: "ONE POSSIBLE OPTION",
    title: "Taking some time off",
    subtitle: "If you need a relatively short break from work, vacation may be the simplest option to look into.",
    note: {
      label: "GOOD TO KNOW",
      text: "Vacation is different from sick leave and protected leave. You generally don't record vacation days on your timesheet, but you'll want to coordinate the timing with your supervisor."
    },
    options: [
      {
        text: "Vacation days",
        description: "A relatively small amount of time off.",
        next: "vacation"
      }
    ]
  },


  "other-long": {
    label: "YOU COULD LOOK INTO",
    title: "Non-health-related leave",
    subtitle: "More than 15 days.",

    options: [
      {
        text: "Extended leave",
        description: "A longer break from work with certain protections.",
        next: "extended"
      }
    ]
  },


  // INFORMATION / TERMINAL NODES


  "flex-time": {
    type: "destination",

    label: "THE INFORMAL OPTION",

    title: "Flex time",

    body: `
      <p>
        This is an informal option for taking time off your GTA or GRA work.
        You and your supervisor agree that you will effectively make up the
        hours you missed later.
      </p>

      <p>
        This tends to be a popular option, but it is not your only option for
        taking time off when you're sick.
      </p>
    `,

    links: [
      {
        text: "Here’s the actual text from the CBA →",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=(b)%20Flexible%20Schedules."
      }
    ],

    disclaimer: `
      This adventure was made by the CGE disability justice and mental health supercaucus
      and is intended to be one helpful resource among many. 
      Policies and agreements can change, so please consult official resources 
      and CGE for help navigating your specific situation.
    `
  },


  "own-health": {
    type: "destination",
    label: "YOUR SITUATION",
    title: "Your own health",
    body: `
      <p>If you need substantial time away from work because of your own
      physical or mental health, several forms of leave may be relevant.</p>
  
      <p>You may be able to use accrued sick leave, donated sick leave,
      or protected leave. Oregon's Paid Leave Oregon program may also
      provide paid leave if you meet its requirements.</p>
  
      <p>These options can overlap, so you don't necessarily have to
      choose just one.</p>
    `,
    links: [
      {
        text: "Read Article 30 — Sick Leave →",
        url: "https://www.cge6069.org/members/cba/#A30"
      },
      {
        text: "Read Article 31 — Protected Leave →",
        url: "https://www.cge6069.org/members/cba/#A31"
      },
      {
        text: "Check Paid Leave Oregon →",
        url: "https://paidleave.oregon.gov/"
      }
    ]
  },
  
  "sick-hours": {
    type: "destination",

    label: "THE MORE OFFICIAL OPTION",

    title: "Sick hours",

    body: `
      <p>
        These are hours you can take off if you or a family member are
        experiencing physical or mental health symptoms or have a doctor's
        appointment.
      </p>

      <p>
        Think of this as the typical "I have a cold and I can't come to work"
        scenario.
      </p>

      <p>
        You can accrue up to 50 hours per year, and up to 100 hours can roll
        over into the next year. Many employees have lots of sick hours they've
        never taken.
      </p>

      <p>
        Sick leave can also be used to care for a family member. The CBA has a
        broad
        <a
          href="https://www.cge6069.org/members/cba/#A30:~:text=Definition%20of%20Family%20Member"
          target="_blank"
          rel="noopener noreferrer"
        >
          definition of family member
        </a>.
      </p>

      <p>
        For more thorough information, check out Article 30 in the CBA.
      </p>
    `,

    links: [
      {
        text: "CBA Article 30 →",
        url: "https://www.cge6069.org/members/cba/#A30"
      }
    ],

    disclaimer: `
      This adventure was made by the CGE disability justice and mental health supercaucus
      and is intended to be one helpful resource among many. 
      Policies and agreements can change, so please consult official resources 
      and CGE for help navigating your specific situation.
    `
  },


  "donated-sick": {
    type: "destination",

    label: "ONE POSSIBLE OPTION",

    title: "Donated sick hours",

    body: `
      <p>
        If you have exceeded your accrued sick hours, you can receive up to
        50 sick hours donated from another employee.
      </p>

      <p>
        You can also donate your unused sick leave.
      </p>

      <p>
        The CBA is your best resource for information about this, but note that
        there are some unresolved ambiguities in the text of the CBA. Feel free
        to ask CGE if you need help navigating donated sick leave.
      </p>
    `,

    links: [
      {
        text: "Learn more about donated sick hours →",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=Section%205%20%E2%80%93-,Leave%20Donation,-(a)%20Graduate%20Employees"
      }
    ],

    disclaimer: `
      This adventure was made by the CGE disability justice and mental health supercaucus
      and is intended to be one helpful resource among many. 
      Policies and agreements can change, so please consult official resources 
      and CGE for help navigating your specific situation..
    `
  },


  plo: {
    type: "destination",

    label: "PROTECTED LEAVE",

    title: "Protected Leave",

    body: `
      <p>
        Including Paid Leave Oregon and other longer-term protected leave
        options.
      </p>
    `,

    links: [
      {
        text: "Try OSU HR's protected leave questionnaire →",
        url: "https://hr.oregonstate.edu/benefits/protected-leave-guidance-employees"
      }
    ],

    disclaimer: `
      This adventure was made by the CGE disability justice and mental health supercaucus
      and is intended to be one helpful resource among many. 
      Policies and agreements can change, so please consult official resources 
      and CGE for help navigating your specific situation.
    `
  },


  vacation: {
    type: "destination",

    label: "ONE POSSIBLE OPTION",

    title: "Vacation days",

    body: `
      <p>
        We get around 15 days a year totally "off."
      </p>

      <p>
        You don't typically record these anywhere, but scheduling these days is
        usually informally agreed upon between you and your supervisor.
      </p>
    `,

    links: [
      {
        text: "Here's what the CBA says →",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=and%20their%20supervisor.-,Section%206%20%E2%80%93%20Leave,-Supervisors%20must%20make"
      }
    ],

    disclaimer: `
      This adventure was made by the CGE disability justice and mental health supercaucus
      and is intended to be one helpful resource among many. 
      Policies and agreements can change, so please consult official resources 
      and CGE for help navigating your specific situation.
    `
  },


  extended: {
    type: "destination",

    label: "LONGER-TERM LEAVE",

    title: "Extended leave",

    body: `
      <p>
        This is unpaid leave for when you need to take a break from work and
        want to be able to come back with protections against retaliation, but
        don't need to be paid during your leave.
      </p>
    `,

    links: [
      {
        text: "Here's what the CBA says →",
        url: "https://www.cge6069.org/members/cba/#Article%2028:~:text=ARTICLE%2027%20%E2%80%93%20STATUTORY%20COMPLIANCE"
      }
    ],

    disclaimer: `
      This adventure was made by the CGE disability justice and mental health supercaucus
      and is intended to be one helpful resource among many. 
      Policies and agreements can change, so please consult official resources 
      and CGE for help navigating your specific situation.
    `
  }
};


let currentNode = "start";
let history = [];

const app = document.getElementById("app");


function renderNode() {
  const node = nodes[currentNode];

  app.innerHTML = "";

  if (node.type === "cover") {
    app.classList.add("cover-page");
  } else {
    app.classList.remove("cover-page");
  }


  // PAGE CONTAINER

  let contentContainer = app;

  if (node.type === "destination") {
    const destinationPage = document.createElement("article");
    destinationPage.className = "destination-page";

    app.appendChild(destinationPage);

    contentContainer = destinationPage;
  }


  // LABEL

  if (node.label) {
    const label = document.createElement("p");
    label.className = "node-label";
    label.textContent = node.label;

    contentContainer.appendChild(label);
  }


  // TITLE

  const title = document.createElement("h1");
  title.textContent = node.title;

  contentContainer.appendChild(title);


  // SUBTITLE

  if (node.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.textContent = node.subtitle;
    subtitle.className = "subtitle";

    contentContainer.appendChild(subtitle);
  }


  // BODY TEXT

  if (node.body) {
    const body = document.createElement("div");
    body.className = "body-text";

    body.innerHTML = node.body;

    contentContainer.appendChild(body);
  }

    // NOTE

  if (node.note) {
    const note = document.createElement("aside");
    note.className = "note";

    const noteLabel = document.createElement("p");
    noteLabel.className = "note-label";
    noteLabel.textContent = node.note.label;

    const noteText = document.createElement("p");
    noteText.className = "note-text";
    noteText.textContent = node.note.text;

    note.appendChild(noteLabel);
    note.appendChild(noteText);

    contentContainer.appendChild(note);
  }


  // OPTIONS

  if (node.options) {
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    node.options.forEach(option => {
      const button = document.createElement("button");
      button.className = "option-button";

      const optionTitle = document.createElement("span");
      optionTitle.className = "option-title";
      optionTitle.textContent = option.text;

      button.appendChild(optionTitle);

      if (option.description) {
        const optionDescription = document.createElement("span");
        optionDescription.className = "option-description";
        optionDescription.textContent = option.description;

        button.appendChild(optionDescription);
      }

      button.addEventListener("click", () => {
        history.push(currentNode);
        currentNode = option.next;

        renderNode();
      });

      optionsContainer.appendChild(button);
    });

    contentContainer.appendChild(optionsContainer);
  }


  // LINKS

  if (node.links) {
    const linksContainer = document.createElement("div");
    linksContainer.className = "links";

    node.links.forEach(link => {
      const anchor = document.createElement("a");

      anchor.textContent = link.text;
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";

      linksContainer.appendChild(anchor);
    });

    contentContainer.appendChild(linksContainer);
  }


  // NAVIGATION

  if (currentNode !== "start") {
    const navigation = document.createElement("div");
    navigation.className = "navigation";

    if (history.length > 0) {
      const backButton = document.createElement("button");
      backButton.textContent = "← Go back";

      backButton.addEventListener("click", () => {
        currentNode = history.pop();

        renderNode();
      });

      navigation.appendChild(backButton);
    }


    const restartButton = document.createElement("button");
    restartButton.textContent = "↻ Start over";

    restartButton.addEventListener("click", () => {
      currentNode = "start";
      history = [];

      renderNode();
    });

    navigation.appendChild(restartButton);

    app.appendChild(navigation);
  }


  // DISCLAIMER

  if (node.disclaimer) {
    const disclaimer = document.createElement("footer");
    disclaimer.className = "disclaimer";
    disclaimer.textContent = node.disclaimer;

    app.appendChild(disclaimer);
  }
}


renderNode();
