export const profileData = {
  name: "Ashwin Suryawanshi",
  logoText: "ASHWIN",
  role: "Jr. Mechanical Design Engineer",
  company: "Arieckal Industries",
  location: "Panvel, Maharashtra",
  availability: "Mechanical Design & Systems Engineering",
  headline: "Precision mechanical design for complex hardware systems.",
  subheadline:
    "Jr. Mechanical Design Engineer working with SolidWorks and AutoCAD on assemblies, manufacturable components, and integrated engineering workflows.",
  email: "ashwin.suryawanshi@example.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  resumeUrl: "/Ashwin_Suryawanshi_Resume.pdf",
};

export const projectsData = [
  {
    id: "pneumatic-sheet-cutter",
    code: "SYS-01",
    category: "Assemblies & CAD",
    title: "Pneumatic Sheet Cutting Machine",
    tools: ["SolidWorks", "AutoCAD", "DFMA", "Pneumatics"],
    summary:
      "Structural frame layout, pneumatic cylinder force estimation, and fabrication drawings engineered for repeatable cutting alignment.",
    specs: [
      { label: "Drive System", value: "Double-acting pneumatic actuation" },
      { label: "Documentation", value: "3D Assembly, BOM & 2D Blueprints" },
      { label: "Design Focus", value: "Rigidity, alignment & service access" },
    ],
    visualType: "cad-wireframe",
  },
  {
    id: "sheet-metal-enclosure",
    code: "SYS-02",
    category: "Sheet Metal & DFM",
    title: "Modular Industrial Control Enclosure",
    tools: ["SolidWorks Sheet Metal", "AutoCAD", "GD&T"],
    summary:
      "Formed sheet-metal housing with calculated bend allowances, flat-pattern nesting readiness, and internal mounting architecture.",
    specs: [
      { label: "Material", value: "1.6 mm CRCA sheet metal" },
      { label: "Output", value: "Flat patterns & detail drawings" },
      { label: "Design Focus", value: "Bend relief, clearances & assembly ease" },
    ],
    visualType: "enclosure-blueprint",
  },
  {
    id: "hardware-telemetry-tool",
    code: "SYS-03",
    category: "Integrated Systems",
    title: "Equipment Log & Diagnostics Tracker",
    tools: ["System Architecture", "Data Logging", "Web Interface"],
    summary:
      "Structured tracking application built to organize equipment records, inspection logs, and operational status in one clean interface.",
    specs: [
      { label: "Structure", value: "Modular client-server workflow" },
      { label: "Data Model", value: "Indexed records & status history" },
      { label: "Design Focus", value: "Clarity, speed & reliable data flow" },
    ],
    visualType: "system-flow",
  },
  {
    id: "mechanical-subassembly-study",
    code: "SYS-04",
    category: "Assemblies & CAD",
    title: "Rotary & Linkage Mechanism Study",
    tools: ["SolidWorks", "Motion & Mates", "AutoCAD"],
    summary:
      "Kinematics and mate-constraint study of a multi-part mechanical linkage focused on smooth motion travel and interference checks.",
    specs: [
      { label: "Verification", value: "Clearance & travel envelope check" },
      { label: "Output", value: "Subassembly tree & part prints" },
      { label: "Design Focus", value: "Motion smoothnes & wear points" },
    ],
    visualType: "api-schematic",
  },
];

export const capabilitiesData = [
  {
    code: "01 // CAD & DESIGN",
    title: "Mechanical Engineering",
    items: [
      "SolidWorks 3D Part Modeling & Multi-Body Assemblies",
      "AutoCAD 2D Drafting, Section Views & Fabrication Prints",
      "Sheet Metal Design, Bend Allowances & Flat Patterns",
      "Bill of Materials (BOM) & Manufacturability (DFMA)",
      "Tolerance Awareness & Fit/Clearance Verification",
    ],
  },
  {
    code: "02 // HARDWARE & SYSTEMS",
    title: "Applied Engineering",
    items: [
      "Electro-Mechanical & Pneumatic Subassembly Concepts",
      "Industrial Equipment Inspection & Maintenance Logic",
      "Structured Technical Specifications & Revision Control",
      "Root-Cause Troubleshooting & Iterative Refinement",
    ],
  },
  {
    code: "03 // TECHNICAL TOOLING",
    title: "Supporting Software",
    items: [
      "Python Utilities for Data Handling & Automation",
      "Full-Stack Web Apps (React, Node.js, Express, MongoDB)",
      "Git & GitHub Version Control Workflows",
      "Clean Documentation & Digital Engineering Tools",
    ],
  },
];

export const experienceData = [
  {
    period: "CURRENT",
    role: "Jr. Mechanical Design Engineer",
    organization: "Arieckal Industries",
    location: "Panvel, Maharashtra",
    points: [
      "Develop 3D CAD models, assemblies, and detailed 2D manufacturing drawings using SolidWorks and AutoCAD.",
      "Support production readiness through accurate dimensions, BOM updates, and practical design revisions.",
    ],
  },
  {
    period: "INTERNSHIP",
    role: "Assistant Supervisor Intern",
    organization: "Sharp Enterprises",
    location: "Maharashtra",
    points: [
      "Supported on-site inspection and maintenance of industrial and commercial generator systems.",
      "Recorded operating conditions and assisted with field diagnostics and technical reporting.",
    ],
  },
  {
    period: "EDUCATION",
    role: "B.E. in Mechanical Engineering",
    organization: "University of Mumbai",
    location: "Maharashtra",
    points: [
      "Built core foundations in machine design, manufacturing processes, mechanics, and CAD drafting.",
      "Developed custom software tools alongside engineering coursework to streamline data and workflows.",
    ],
  },
];