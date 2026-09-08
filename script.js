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
        description: "I or a family member need care",
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
    label: "NON-HEALTH-RELATED",
  
    title: "How much time do you need?",
  
    subtitle: "Different options may make sense depending on how long you expect to be away.",
  
    options: [
      {
        text: "A short break",
        description: "A few days or a relatively short amount of time.",
        next: "other-short"
      },
      {
        text: "A longer absence",
        description: "Weeks or months away from work.",
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
  
    subtitle: "There may be several types of leave available for longer absences. Start with the situation that best describes what you need.",
  
    body: `
      <p>
        Your options may overlap. Depending on your circumstances, you may be
        eligible for more than one type of leave or program.
      </p>
    `,
  
    note: {
      label: "GOOD TO KNOW",
      text: "You don't necessarily have to choose just one option. This guide is meant to help you identify things worth looking into."
    },
  
    options: [
      {
        text: "My own health",
        description: "I need time away because of my physical or mental health.",
        next: "own-health"
      },
      {
        text: "Family or caregiving",
        description: "I need time to care for a family member.",
        next: "family-care"
      },
      {
        text: "Parental leave",
        description: "Birth, adoption, foster placement, or bonding with a new child.",
        next: "parental"
      },
      {
        text: "Pregnancy",
        description: "Pregnancy-related medical needs or disability.",
        next: "pregnancy"
      },
      {
        text: "Bereavement",
        description: "Time away following the death of a family member.",
        next: "bereavement"
      },
      {
        text: "Safety",
        description: "Domestic violence, sexual assault, harassment, stalking, or related circumstances.",
        next: "safety"
      },
      {
        text: "I'm not sure",
        description: "I don't know which category applies to my situation.",
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
    title: "Taking a longer absence",
    subtitle: "If you expect to need weeks or months away from work, there may be more formal leave options to explore.",

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
  
    label: "LONGER-TERM OPTIONS",
  
    title: "Your own health",
  
    body: `
      <p>
        If you need substantial time away from your GTA or GRA work because of
        your own physical or mental health, several options may be relevant.
      </p>
  
      <p>
        Depending on your circumstances, you may be able to use accrued sick
        leave, donated sick leave, protected leave under the CBA, or Paid Leave
        Oregon.
      </p>
  
      <p>
        Federal protections such as FMLA may also apply in some circumstances.
      </p>
    `,
  
    note: {
      label: "YOU MAY HAVE MORE THAN ONE OPTION",
      text: "These programs and forms of leave can overlap. Check each relevant option rather than assuming you must choose only one."
    },
  
    links: [
      {
        text: "CGE CBA — Article 30: Sick Leave →",
        url: "https://www.cge6069.org/members/cba/#A30"
      },
      {
        text: "CGE CBA — Article 31: Protected Leave →",
        url: "https://www.cge6069.org/members/cba/#A31"
      },
      {
        text: "Paid Leave Oregon — Employee Overview →",
        url: "https://paidleave.oregon.gov/employees/overview.html"
      },
      {
        text: "U.S. Department of Labor — FMLA Employee Guide →",
        url: "https://www.dol.gov/agencies/whd/fmla/employee-guide"
      }
    ],
  
    disclaimer: "Eligibility depends on your circumstances. The CBA and official program websites are the best sources for current requirements."
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

  "family-care": {
    type: "destination",
  
    label: "LONGER-TERM OPTIONS",
  
    title: "Family or caregiving",
  
    body: `
      <p>
        If you need time away from work to care for a family member, several
        types of leave may be relevant depending on the situation.
      </p>
  
      <p>
        You may want to look at accrued sick leave, protected leave under the
        CBA, and Paid Leave Oregon.
      </p>
  
      <p>
        Different programs may use different definitions of "family member," so
        it's worth checking the specific rules for each option.
      </p>
    `,
  
    links: [
      {
        text: "CGE CBA — Definition of Family Member →",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=Definition%20of%20Family%20Member"
      },
      {
        text: "CGE CBA — Article 31: Protected Leave →",
        url: "https://www.cge6069.org/members/cba/#A31"
      },
      {
        text: "Paid Leave Oregon — Family Leave →",
        url: "https://paidleave.oregon.gov/employees/overview.html"
      },
      {
        text: "U.S. Department of Labor — FMLA Employee Guide →",
        url: "https://www.dol.gov/agencies/whd/fmla/employee-guide"
      }
    ],
  
    disclaimer: "Definitions and eligibility requirements vary between programs. Check the original source for your specific situation."
  },

  parental: {
    type: "destination",
  
    label: "LONGER-TERM OPTIONS",
  
    title: "Parental leave",
  
    body: `
      <p>
        If you are preparing for or welcoming a new child through birth,
        adoption, or foster placement, multiple leave options may be relevant.
      </p>
  
      <p>
        The CGE CBA includes parental leave within its protected leave
        provisions. Paid Leave Oregon may also provide paid family leave for
        bonding with a new child.
      </p>
    `,
  
    note: {
      label: "START EARLY IF YOU CAN",
      text: "Longer-term leave can involve university procedures and external programs, so giving yourself time to explore the options may make the process easier."
    },
  
    links: [
      {
        text: "CGE CBA — Article 31: Protected Leave →",
        url: "https://www.cge6069.org/members/cba/#A31"
      },
      {
        text: "Paid Leave Oregon — Employee Overview →",
        url: "https://paidleave.oregon.gov/employees/overview.html"
      },
      {
        text: "U.S. Department of Labor — FMLA Employee Guide →",
        url: "https://www.dol.gov/agencies/whd/fmla/employee-guide"
      }
    ],
  
    disclaimer: "Eligibility and notice requirements vary. Consult the CBA, OSU HR, and relevant state or federal programs."
  },

  pregnancy: {
    type: "destination",
  
    label: "LONGER-TERM OPTIONS",
  
    title: "Pregnancy",
  
    body: `
      <p>
        Pregnancy-related medical needs may qualify for several different forms
        of leave and job protection.
      </p>
  
      <p>
        Depending on your situation, you may want to look at sick leave,
        protected leave under the CBA, Paid Leave Oregon, and Oregon Family
        Leave Act protections.
      </p>
    `,
  
    links: [
      {
        text: "CGE CBA — Article 30: Sick Leave →",
        url: "https://www.cge6069.org/members/cba/#A30"
      },
      {
        text: "CGE CBA — Article 31: Protected Leave →",
        url: "https://www.cge6069.org/members/cba/#A31"
      },
      {
        text: "Paid Leave Oregon →",
        url: "https://paidleave.oregon.gov/employees/overview.html"
      },
      {
        text: "Oregon BOLI — Oregon Family Leave Act →",
        url: "https://www.oregon.gov/boli/workers/Pages/oregon-family-leave.aspx"
      }
    ],
  
    disclaimer: "Pregnancy-related leave can involve overlapping state, federal, contractual, and university protections."
  },

  bereavement: {
    type: "destination",
  
    label: "OPTIONS TO LOOK INTO",
  
    title: "Bereavement",
  
    body: `
      <p>
        Time away following the death of a family member may be covered by more
        than one leave policy.
      </p>
  
      <p>
        You may want to look at the CBA's sick leave provisions as well as
        Oregon Family Leave Act protections.
      </p>
    `,
  
    links: [
      {
        text: "CGE CBA — Article 30: Sick Leave →",
        url: "https://www.cge6069.org/members/cba/#A30"
      },
      {
        text: "Oregon BOLI — Oregon Family Leave Act →",
        url: "https://www.oregon.gov/boli/workers/Pages/oregon-family-leave.aspx"
      }
    ],
  
    disclaimer: "Leave eligibility can depend on the circumstances and your relationship to the person who died."
  },

  safety: {
    type: "destination",
  
    label: "OPTIONS TO LOOK INTO",
  
    title: "Safety and safe leave",
  
    body: `
      <p>
        If you or someone in your family needs time away from work because of
        domestic violence, sexual assault, harassment, stalking, or another
        qualifying safety-related situation, there may be protected and paid
        leave options available.
      </p>
  
      <p>
        Paid Leave Oregon includes safe leave for qualifying circumstances.
        The CBA may also provide relevant protections.
      </p>
    `,
  
    note: {
      label: "YOU DON'T HAVE TO NAVIGATE THIS ALONE",
      text: "If you are dealing with an urgent or unsafe situation, consider contacting a trusted advocate or support organization in addition to reviewing leave information."
    },
  
    links: [
      {
        text: "Paid Leave Oregon — Employee Overview →",
        url: "https://paidleave.oregon.gov/employees/overview.html"
      },
      {
        text: "CGE CBA — Article 30: Sick Leave →",
        url: "https://www.cge6069.org/members/cba/#A30"
      },
      {
        text: "CGE CBA — Article 31: Protected Leave →",
        url: "https://www.cge6069.org/members/cba/#A31"
      }
    ],
  
    disclaimer: "You do not need to use this guide as your only source of support. Eligibility and protections depend on your circumstances."
  },

  "not-sure": {
    type: "destination",
  
    label: "THAT'S OKAY",
  
    title: "I'm not sure what applies to me",
  
    body: `
      <p>
        Leave policies can overlap, and the names of different programs aren't
        always intuitive.
      </p>
  
      <p>
        If you're not sure where to start, look at the CBA's protected leave
        provisions and the Paid Leave Oregon employee guide. You can also
        contact CGE for help understanding which options might be worth
        investigating.
      </p>
    `,
  
    links: [
      {
        text: "CGE — Collective Bargaining Agreement →",
        url: "https://www.cge6069.org/members/cba/"
      },
      {
        text: "Paid Leave Oregon — Employee Overview →",
        url: "https://paidleave.oregon.gov/employees/overview.html"
      },
      {
        text: "Paid Leave Oregon — How to Apply →",
        url: "https://paidleave.oregon.gov/employees/"
      }
    ],
  
    disclaimer: "This zine is meant to help you identify possibilities, not determine your legal eligibility."
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


  // PAGE TYPE

  if (node.type === "cover") {
    app.classList.add("cover-page");
  } else {
    app.classList.remove("cover-page");
  }


  // CONTENT CONTAINER

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

    // Allows paragraphs and hyperlinks written in node.body
    body.innerHTML = node.body;

    contentContainer.appendChild(body);
  }


  // NOTE / GOOD TO KNOW

  if (node.note) {
    const note = document.createElement("aside");
    note.className = "note";

    if (node.note.label) {
      const noteLabel = document.createElement("p");
      noteLabel.className = "note-label";
      noteLabel.textContent = node.note.label;

      note.appendChild(noteLabel);
    }

    const noteText = document.createElement("p");
    noteText.className = "note-text";
    noteText.textContent = node.note.text;

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

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
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


  // DISCLAIMER

  if (node.disclaimer) {
    const disclaimer = document.createElement("p");
    disclaimer.className = "disclaimer";
    disclaimer.textContent = node.disclaimer;

    contentContainer.appendChild(disclaimer);
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

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

      navigation.appendChild(backButton);
    }

    const restartButton = document.createElement("button");
    restartButton.textContent = "↻ Start over";

    restartButton.addEventListener("click", () => {
      currentNode = "start";
      history = [];
      renderNode();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    navigation.appendChild(restartButton);

    app.appendChild(navigation);
  }
}

renderNode();
