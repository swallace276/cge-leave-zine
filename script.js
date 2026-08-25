const nodes = {
  start: {
    title: "Need time off?",
    subtitle: "A zine for figuring out how to take leave as a CGE member, GTA, or GRA at Oregon State University",
    options: [
      {
        text: "Find out more →",
        next: "reason"
      }
    ]
  },

  reason: {
    title: "Reason for leave?",
    options: [
      {
        text: "Health",
        description: "For health-related reasons.",
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
    title: "How much time do you need?",
    subtitle: "Health-related leave",
    options: [
      {
        text: "Hours to days",
        next: "health-short"
      },
      {
        text: "Weeks to months",
        next: "health-long"
      }
    ]
  },

  other: {
    title: "How much time do you need?",
    subtitle: "Non-health-related leave",
    options: [
      {
        text: "15 days or fewer",
        next: "other-short"
      },
      {
        text: "More than 15 days",
        next: "other-long"
      }
    ]
  },

  "health-short": {
    title: "Health-related leave",
    subtitle: "Hours to days",
    options: [
      {
        text: "Flex time",
        next: "flex-time"
      },
      {
        text: "Sick hours",
        next: "sick-hours"
      }
    ]
  },

  "health-long": {
    title: "Health-related leave",
    subtitle: "Weeks to months",
    options: [
      {
        text: "Donated sick hours",
        next: "donated-sick"
      },
      {
        text: "Protected Leave",
        next: "plo"
      }
    ]
  },

  "other-short": {
    title: "Non-health-related leave",
    subtitle: "15 days or fewer",
    options: [
      {
        text: "Vacation days",
        next: "vacation"
      }
    ]
  },

  "other-long": {
    title: "Non-health-related leave",
    subtitle: "More than 15 days",
    options: [
      {
        text: "Extended leave",
        next: "extended"
      }
    ]
  },


  // INFORMATION / TERMINAL NODES

  "flex-time": {
    title: "Flex time",
    subtitle: "This is an informal option for taking time off your GTA or GRA work, in which you and your supervisor agree that you will effectively make up the hours you missed later. This tends to be a popular option but is not your only option for time off when you're sick!",
    links: [
      {
        text: "Here’s the actual text from the CBA",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=(b)%20Flexible%20Schedules."
      }
    ]
  },

  "sick-hours": {
    title: "Sick hours",
    subtitle: "These are hours you can take off if you or a family member (broadly defined, see below) are experiencing physical or mental health symptoms or have a doctor's appointment. Think of this as the typical 'I have a cold and I can’t come to work' scenario. You can accrue up to 50 per year and up to 100 can roll over into the next year. Many employees have lots of sick hours they've never taken. For more thorough information, check out Article 30 in the CBA.",
    links: [
      {
        text: "CBA Article 30",
        url: "https://www.cge6069.org/members/cba/#A30"
      },
      {
        text: "Definition of Family Member",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=Definition%20of%20Family%20Member"
      },
      
    ]
  },

  "donated-sick": {
    title: "Donated sick hours",
    subtitle: "If you have exceeded your accrued sick hours, you can also receive up to 50 sick hours donated from another employee. You can also donate your unused sick leave. The CBA is your best resource for information about this, but note that there are some unresolved ambiguities in the text of the CBA. Feel free to ask CGE if you need help navigating donated sick leave.",
    links: [
      {
        text: "Learn more about donated sick hours",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=Section%205%20%E2%80%93-,Leave%20Donation,-(a)%20Graduate%20Employees"
      }
    ]
  },

  plo: {
    title: "Protected Leave",
    subtitle: "Including Paid Leave Oregon",
    links: [
      {
        text: "A questionnaire on OSU HR's website",
        url: "https://hr.oregonstate.edu/benefits/protected-leave-guidance-employees"
      }
    ]
  },

  vacation: {
    title: "Vacation days",
    subtitle: "We get around 15 days a year totally 'off'. You don't typically record these anywhere, but scheduling these days are usually informally agreed upon between you and your supervisor.",
    links: [
      {
        text: "Here's what it says in the CBA",
        url: "https://www.cge6069.org/members/cba/#A30:~:text=and%20their%20supervisor.-,Section%206%20%E2%80%93%20Leave,-Supervisors%20must%20make"
      }
    ]
  },

  extended: {
    title: "Extended leave",
    subtitle: "Unpaid leave, if you need to take a break from work and want to be able to come back and have protections around retaliations but don't need to get paid",
    links: [
      {
        text: "Here's what the CBA says",
        url: "https://www.cge6069.org/members/cba/#Article%2028:~:text=ARTICLE%2027%20%E2%80%93%20STATUTORY%20COMPLIANCE"
      }
    ]
  }
};


let currentNode = "start";
let history = [];

const app = document.getElementById("app");


function renderNode() {
  const node = nodes[currentNode];

  app.innerHTML = "";


  // TITLE

  const title = document.createElement("h1");
  title.textContent = node.title;
  app.appendChild(title);


  // SUBTITLE

  if (node.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.textContent = node.subtitle;
    subtitle.className = "subtitle";
    app.appendChild(subtitle);
  }


  // OPTIONS

  if (node.options) {
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    node.options.forEach(option => {
      const button = document.createElement("button");

      let buttonText = option.text;

      if (option.description) {
        buttonText += "\n" + option.description;
      }

      button.textContent = buttonText;

      button.addEventListener("click", () => {
        history.push(currentNode);
        currentNode = option.next;
        renderNode();
      });

      optionsContainer.appendChild(button);
    });

    app.appendChild(optionsContainer);
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

    app.appendChild(linksContainer);
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
}


renderNode();
