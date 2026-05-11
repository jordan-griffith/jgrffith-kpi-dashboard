export const mockData = {
  kpis: [
    { title: "Dev Time", value: "64%", trend: "↑ 4% vs last qtr", color: "green" },
    { title: "Engaged", value: "81%", trend: "↑ 6% vs last qtr", color: "blue" },
    { title: "Actions", value: "1.8/qtr", trend: "Target: 1.5", color: "purple" },
    { title: "Confidence", value: "77%", trend: "Target: 80%", color: "amber" }
  ],
  okrs: [
    { title: "Meeting prep −60%", current: "72%", status: "ON TRACK" },
    { title: "Mgrs back requests", current: "85%", status: "ON TRACK" },
    { title: "1 change/mgr/qtr", current: "60%", status: "AT RISK" },
    { title: "80% confidence", current: "77%", status: "AT RISK" }
  ],
  timeAllocation: [
    { name: "Coding", value: 42, fill: "#00FF88" },
    { name: "Meetings", value: 28, fill: "#FF3B6B" },
    { name: "Code Rev", value: 16, fill: "#3B82F6" },
    { name: "Admin", value: 8, fill: "#F59E0B" },
    { name: "Other", value: 6, fill: "#A78BFA" }
  ],
  teamEfficiency: [
    { name: "Platform Team", score: 74 },
    { name: "DevOps", score: 68 },
    { name: "Data Engineering", score: 61 },
    { name: "QA / Testing", score: 52 },
    { name: "Legacy Systems", score: 38 }
  ],
  trendData: [
    { month: "Aug", value: 42 },
    { month: "Sep", value: 46 },
    { month: "Oct", value: 49 },
    { month: "Nov", value: 52 },
    { month: "Dec", value: 55 },
    { month: "Jan", value: 58 },
    { month: "Feb", value: 61 },
    { month: "Mar", value: 64 }
  ],
  teamsData: {
    "Platform Team": {
      score: 74,
      devs: [
        { name: "Alex Chen", score: 78, breakdown: [52, 22, 14, 8, 4] },
        { name: "Sarah Kim", score: 72, breakdown: [48, 24, 18, 6, 4] },
        { name: "Marcus Lee", score: 65, breakdown: [43, 28, 16, 9, 4] },
        { name: "Priya Patel", score: 61, breakdown: [38, 32, 14, 12, 4] }
      ],
      actions: [
        "Reduce meeting load for Alex Chen (22%, target is 14%)",
        "Add daily focus blocks 10am–12pm for all devs",
        "Review code review assignments for Marcus Lee"
      ]
    },
    "DevOps": {
      score: 68,
      devs: [
        { name: "John Doe", score: 70, breakdown: [50, 20, 15, 10, 5] },
        { name: "Jane Smith", score: 66, breakdown: [45, 25, 15, 10, 5] }
      ],
      actions: [
        "Review on-call schedule"
      ]
    },
    "Data Engineering": {
      score: 61,
      devs: [
        { name: "Bob Martin", score: 61, breakdown: [40, 30, 15, 10, 5] }
      ],
      actions: [
        "Reduce meeting overhead"
      ]
    },
    "QA / Testing": {
      score: 52,
      devs: [
        { name: "Alice Johnson", score: 52, breakdown: [35, 30, 20, 10, 5] }
      ],
      actions: [
        "Optimize code review process"
      ]
    },
    "Legacy Systems": {
      score: 38,
      devs: [
        { name: "Tom Wilson", score: 38, breakdown: [25, 40, 15, 15, 5] }
      ],
      actions: [
        "Modernize tooling"
      ]
    }
  }
};
