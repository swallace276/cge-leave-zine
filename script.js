const nodes = {
  start: {
    title: "Need time off?",
    subtitle: "Information about taking time away from work.",
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

  "flex-time": {
    title: "Flex time",
    subtitle: "Add your information about flex time here.",
    info: true
  },

  "sick-hours": {
    title: "Sick hours",
    subtitle: "Add your information about sick hours here.",
    info: true
  },

  "donated-sick": {
    title: "Donated sick hours",
    subtitle: "Add your information about donated sick hours here.",
    info: true
  },

  plo: {
    title: "PLO",
    subtitle: "Add your information about PLO here.",
    info: true
  },

  vacation: {
    title: "Vacation days",
    subtitle: "Add your information about vacation days here.",
    info: true
  },

  extended: {
    title: "Extended leave",
    subtitle: "Add your information about extended leave here.",
    info: true
  }
};


let currentNode = "start";
let history = [];

const app = document.getElementById("app");


function renderNode() {
  const node = nodes[currentNode];

  app.innerHTML = "";

  // Title
  const title = document.createElement("h1");
  title.textContent = node.title;
  app.appendChild(title);

  // Subtitle
  if (node.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.textContent = node.subtitle;
    subtitle.className = "subtitle";
    app.appendChild(subtitle);
  }

  // Options
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

  // Navigation
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


renderNode();
