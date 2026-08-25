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
        text: "PLO",
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
    subtitle: "Add your information about flex time here.",
    links: [
      {
        text: "Learn more about flex time",
        url: "https://example.com"
      }
    ]
  },

  "sick-hours": {
    title: "Sick hours",
    subtitle: "Add your information about sick hours here.",
    links: [
      {
        text: "Learn more about sick hours",
        url: "https://example.com"
      }
    ]
  },

  "donated-sick": {
    title: "Donated sick hours",
    subtitle: "Add your information about donated sick hours here.",
    links: [
      {
        text: "Learn more about donated sick hours",
        url: "https://example.com"
      }
    ]
  },

  plo: {
    title: "PLO",
    subtitle: "Add your information about PLO here.",
    links: [
      {
        text: "Learn more about PLO",
        url: "https://example.com"
      }
    ]
  },

  vacation: {
    title: "Vacation days",
    subtitle: "Add your information about vacation days here.",
    links: [
      {
        text: "Learn more about vacation days",
        url: "https://example.com"
      }
    ]
  },

  extended: {
    title: "Extended leave",
    subtitle: "Add your information about extended leave here.",
    links: [
      {
        text: "Learn more about extended leave",
        url: "https://example.com"
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
