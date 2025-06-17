const steps = [
  {
    title: "Design Consultation",
    desc: "Share your ideas and floor plan to receive personalised 3D designs and an instant quote.",
  },
  {
    title: "Design Finalization",
    desc: "Work with our experts to finalize layouts, styles, materials, and get your final quote.",
  },
  {
    title: "Material Selection",
    desc: "Choose materials, colors, finishes, and fittings from our curated range.",
  },
  {
    title: "Site Work Begins",
    desc: "Our team starts work on-site, keeping you updated every step of the way.",
  },
  {
    title: "Mid-Stage Review",
    desc: "We’ll walk you through progress to make any minor tweaks if required.",
  },
  {
    title: "Installation & Handover",
    desc: "Pay the remaining 50% and let us take care of the installation for a smooth move-in.",
  },
];

let current = 0;

function updateStep() {
  document.getElementById("step-number").textContent = current + 1;
  document.getElementById("step-title").textContent = steps[current].title;
  document.getElementById("step-desc").textContent = steps[current].desc;
}

function prevStep() {
  if (current > 0) {
    current--;
    updateStep();
  }
}

function nextStep() {
  if (current < steps.length - 1) {
    current++;
    updateStep();
  }
}

updateStep();
